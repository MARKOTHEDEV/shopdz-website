import Axios, { AxiosHeaders } from "axios";
import { CustomHttpError } from "./error/CustomHttpError.js";
import useNetworkLoaderStore from "./useNetworkLoaderStore.js";
import { getLangCode } from "./lang";
import env from "./config/env.js";

const { baseUrl } = env;

const api = Axios.create({
  baseURL: baseUrl,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 second timeout
});
api.interceptors.request.use(
  function (config) {
    showLoadingBar();

    // Add authorization header if token exists
    // First check if the header is already set by the auth subscription
    if (!config.headers.Authorization) {
      const authStore = globalThis.localStorage?.getItem("auth");
      if (authStore) {
        try {
          const parsedAuth = JSON.parse(authStore);
          const token = parsedAuth?.state?.accessToken;
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log(
              "Request interceptor - Token added from localStorage:",
              token.substring(0, 20) + "..."
            );
          } else {
            console.log("Request interceptor - No token found in localStorage");
          }
        } catch (error) {
          console.error(
            "Request interceptor - Failed to parse auth token from localStorage:",
            error
          );
        }
      } else {
        console.log(
          "Request interceptor - No auth store found in localStorage"
        );
      }
    } else {
      console.log("Request interceptor - Authorization header already set");
    }

    // Add language header based on current frontend language
    try {
      const lang = getLangCode();
      if (!config.headers) {
        config.headers = new AxiosHeaders();
      }
      // Prefer AxiosHeaders#set when available
      if (config.headers instanceof AxiosHeaders) {
        config.headers.set("X-LANG", lang);
      } else {
        (config.headers as Record<string, string>)["X-LANG"] = lang;
      }
    } catch {
      // Ignore errors when setting language header
    }

    return config;
  },
  function (error) {
    hideLoadingBar();
    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    hideLoadingBar();
    if (response.data?.status === "error") {
      if (
        response.data?.errors &&
        Object.values(response.data?.errors).length
      ) {
        const errors = Object.values(response.data?.errors);
        return Promise.reject(
          new CustomHttpError(errors[0], {
            statusCode: 400,
            responseText: errors[0],
            payload: response.data?.errors,
          })
        );
      }

      return Promise.reject(
        new CustomHttpError(response.data?.message, {
          statusCode: 400,
          responseText: response.data?.message,
        })
      );
    }
    return response.data;
  },
  async function (err) {
    hideLoadingBar();

    // Handle CORS errors specifically
    if (err.code === "ERR_NETWORK" || err.message === "Network Error") {
      return Promise.reject(
        new CustomHttpError(
          "Unable to connect to the server. Please check if the API server is running and CORS is properly configured.",
          {
            statusCode: 0,
            responseText:
              "Network/CORS Error - Unable to connect to API server",
          }
        )
      );
    }

    if (!err.response) {
      return Promise.reject(
        new CustomHttpError(
          "Error occurred while sending the request, please check your internet settings",
          {
            statusCode: 0,
            responseText:
              "Error occurred while sending the request, please check your internet settings",
          }
        )
      );
    }

    const { status, data } = err.response;
    console.log(status, data);

    // // Handle 401 Unauthorized - token expired or invalid
    // if (status === 401) {
    //   // Import the authentication store dynamically to avoid circular imports
    //   const { default: useAuthentication } = await import(
    //     "@/modules/auth/stores/useAuthentication"
    //   );

    //   // Use the logout function to properly clear state
    //   useAuthentication.getState().logout();

    //   // Redirect to login page
    //   if (typeof window !== "undefined") {
    //     window.location.href = "/onboarding/sign-in";
    //   }

    //   return Promise.reject(
    //     new CustomHttpError("Your session has expired. Please sign in again.", {
    //       statusCode: 401,
    //       responseText: "Authentication expired",
    //     })
    //   );
    // }

    if (err.response.data && err.response.data.message) {
      return Promise.reject(
        new CustomHttpError(err.response.data.message, {
          statusCode: err.response.status,
          responseText: err.response.data.message,
          payload: err.response.data.payload,
          responseCode: err.response.data.responseCode,
        })
      );
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(
      new CustomHttpError("Error occurred while sending the request", {
        statusCode: err.response.status,
        responseText: "Error occurred while sending the request",
      })
    );
  }
);

function showLoadingBar() {
  useNetworkLoaderStore.getState().increaseLoadingCount();
}

function hideLoadingBar() {
  useNetworkLoaderStore.getState().decreaseLoadingCount();
}

export default api;
