import { useState } from "react";
import { Language, NavArrowDown } from "iconoir-react";
import Logo from "../Logo";
import Button from "../Button";
import DesktopMenuLinks from "./DesktopMenuLinks";
import { useRouter } from "next/router";
import { useLang, setLang, Lang, getLang } from "../../utils/lang";
import { EXTERNAL_LINKS } from "../../utils/links";

const DesktopMenu = ({
  colorVariant = "white",
}: {
  colorVariant?: "white" | "black";
}) => {
  const router = useRouter();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const currentLang = useLang();

  const langLabels: Record<Lang, string> = {
    en: "ENG",
    fr: "FR",
    ar: "AR",
  };

  const colorVariants = {
    white: {
      links: "#FFFFFFCC",
      text: "#FFFFFF",
    },
    black: {
      links: "#3D3C39",
      text: "#3D3C39",
    },
  };

  return (
    <div className="max-w-[1210px] mx-auto pt-[40px] flex items-center justify-between">
      <Logo isColored={colorVariant === "black"} />

      <div className="flex items-center gap-[90px]">
        <div
          className={`flex items-center gap-[24px] text-[${colorVariants[colorVariant].links}] font-inter font-medium text-[16px]`}
        >
          <div
            className="flex items-center gap-[7px] relative z-[100] h-full py-2"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <p
              className={`cursor-pointer text-[${colorVariants[colorVariant].text}]`}
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              {getLang("Products")}
            </p>
            <NavArrowDown
              className={`transition-transform
                text-[${colorVariants[colorVariant].text}]
                ${isProductsOpen ? "rotate-180" : ""}`}
            />

            {/* Bridge area to prevent closing when moving mouse to dropdown */}
            {isProductsOpen && (
              <div className="absolute top-full left-0 w-full h-[20px] bg-transparent" />
            )}

            {isProductsOpen && <DesktopMenuLinks />}
          </div>
          <p
            className={`cursor-pointer cursor-pointer text-[${colorVariants[colorVariant].text}]`}
            onClick={() => router.push("/discover")}
          >
            {getLang("Discover")}
          </p>
          <p
            className={`cursor-pointer cursor-pointer text-[${colorVariants[colorVariant].text}]`}
            onClick={() => router.push("/about")}
          >
            {getLang("About us")}
          </p>
          <p
            className={`cursor-pointer cursor-pointer text-[${colorVariants[colorVariant].text}]`}
          >
            {getLang("Blog")}
          </p>
        </div>

        <div className="flex items-center gap-[9px]">
          <div className="relative">
            <div
              className="flex items-center gap-[6px] cursor-pointer"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <Language
                className={`text-[${colorVariants[colorVariant].text}]`}
              />
              <p
                className={`text-[${colorVariants[colorVariant].text}] font-inter font-medium text-[14px]`}
              >
                {langLabels[currentLang]}
              </p>
              <NavArrowDown
                className={`text-[${
                  colorVariants[colorVariant].text
                }] transition-transform ${isLangOpen ? "rotate-180" : ""}`}
              />
            </div>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md py-2 z-50 min-w-[100px]">
                {(["en", "fr", "ar"] as Lang[]).map((lang) => (
                  <div
                    key={lang}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black font-inter text-sm"
                    onClick={() => {
                      setLang(lang);
                      setIsLangOpen(false);
                    }}
                  >
                    {langLabels[lang]}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Button
            onClick={() => window.open(EXTERNAL_LINKS.ADMIN, "_blank")}
            variant={colorVariant === "white" ? "primaryOutline" : "outline"}
          >
            {getLang("Login")}
          </Button>
          <Button
            variant={colorVariant === "white" ? "white" : "primary"}
            onClick={() => window.open(EXTERNAL_LINKS.ADMIN, "_blank")}
          >
            {getLang("Use for free")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
