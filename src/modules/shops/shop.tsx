import api from "../../utils/api";
import { apiEndpoints } from "../../utils/endpoints";
import { CustomHttpError } from "../../utils/error/CustomHttpError";
import { Shop } from "./types/index.js";

type Prop = {
  search?: string;
};
export async function getShops({ search }: Prop) {
  try {
    const response = await api.get(`${apiEndpoints.shop.GET_SHOPS}`, {
      params: {
        search,
      },
    });
    return response as unknown as Shop[];
  } catch (error) {
    // Handle specific error cases
    if (error instanceof CustomHttpError) {
      if (error.statusCode === 401) {
        throw new Error(
          "Authentication required. Please sign in to view shop."
        );
      } else if (error.statusCode === 403) {
        throw new Error("You do not have permission to view shop.");
      } else if (error.statusCode === 0) {
        throw new Error(
          "Unable to connect to the server. Please check your internet connection."
        );
      }
    }

    throw new Error("Failed to fetch shop. Please try again.");
  }
}
