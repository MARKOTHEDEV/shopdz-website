import { useState } from "react";
import { Language, Menu, NavArrowDown, Xmark } from "iconoir-react";
import Logo from "../Logo";
import Button from "../Button";
import CustomDrawer from "../CustomDrawer";
import MobileMenueDropDown from "./MobileMenueDropDown";
import { mobileNavLinks } from "./navLinks";
import { useLang, setLang, Lang, getLang } from "../../utils/lang";
import { EXTERNAL_LINKS } from "../../utils/links";

const MobileMenu = ({
  colorVariant = "white",
}: {
  colorVariant?: "white" | "black";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [isLangOpen, setIsLangOpen] = useState(false);
  const currentLang = useLang();

  const langLabels: Record<Lang, string> = {
    en: "ENG",
    fr: "FR",
    ar: "AR",
  };

  return (
    <div className="flex justify-between items-center  py-[20px] px-[20px]">
      <Logo isColored={colorVariant === "black"} />

      <div className="flex items-center gap-[20px]">
        <Button
          variant={colorVariant === "white" ? "white" : "primary"}
          onClick={() => window.open(EXTERNAL_LINKS.ADMIN, "_blank")}
        >
          {getLang("Use for free")}
        </Button>
        <Menu
          className={`text-[18px] ${
            colorVariant === "white"
              ? "text-content-primary-inverse"
              : "text-content-primary-black"
          }`}
          onClick={() => setIsOpen(true)}
        />
      </div>

      <CustomDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        fullWidth={true}
      >
        <div className="px-[20px] py-[24px] relative  h-full">
          <div className="flex justify-between items-center pb-[34px]">
            <Logo isColored />
            <div className="flex items-center gap-[28px] ">
              <div className="relative">
                <div
                  className="flex items-center gap-[6px] cursor-pointer"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  <Language className=" text-[#716F6A]" />
                  <p className="text-[#716F6A] font-inter font-medium text-[14px]">
                    {langLabels[currentLang]}
                  </p>
                  <NavArrowDown
                    className={`text-[#B6B4AF] transition-transform ${
                      isLangOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md py-2 z-50 min-w-[100px] border border-gray-100">
                    {(["en", "fr", "ar"] as Lang[]).map((lang) => (
                      <div
                        key={lang}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#716F6A] font-inter text-sm"
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
              <Xmark
                className="text-[#3D3C39]"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>

          <div className="flex flex-col  justify-between ">
            <div className="flex flex-col gap-[24px] max-h-[392px] overflow-y-auto">
              {mobileNavLinks.map((link, index) => (
                <MobileMenueDropDown
                  key={link.title}
                  {...link}
                  isOpen={openDropdownIndex === index}
                  onToggle={() =>
                    setOpenDropdownIndex(
                      openDropdownIndex === index ? null : index
                    )
                  }
                />
              ))}
            </div>

            <div className="absolute bottom-[40px] left-0 right-0 flex  flex-col items-center gap-[12px] bg-white">
              <Button
                variant="outline"
                className="w-[90%]"
                onClick={() => window.open(EXTERNAL_LINKS.ADMIN, "_blank")}
              >
                {getLang("Use for free")}
              </Button>
              <Button
                variant="primary"
                className="w-[90%]"
                onClick={() => window.open(EXTERNAL_LINKS.ADMIN, "_blank")}
              >
                {getLang("Use for free")}
              </Button>
            </div>
          </div>
        </div>
      </CustomDrawer>
    </div>
  );
};

export default MobileMenu;
