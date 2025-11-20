import { useState } from "react";
import { Language, Menu, NavArrowDown, Xmark } from "iconoir-react";
import Logo from "../Logo";
import Button from "../Button";
import CustomDrawer from "../CustomDrawer";
import MobileMenueDropDown from "./MobileMenueDropDown";
import { mobileNavLinks } from "./navLinks";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  return (
    <div className="flex justify-between items-center  py-[20px] px-[20px]">
      <Logo />

      <div className="flex items-center gap-[20px]">
        <Button>Use for free</Button>
        <Menu
          className="text-[18px] text-content-primary-inverse"
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
              <div className="flex items-center gap-[6px]">
                <Language className=" text-[#716F6A]" />
                <p className="text-[#716F6A] font-inter font-medium text-[14px]">
                  ENG
                </p>
                <NavArrowDown className="text-[#B6B4AF]" />
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
              <Button variant="outline" className="w-[90%]">
                Use for free
              </Button>
              <Button variant="primary" className="w-[90%]">
                Use for free
              </Button>
            </div>
          </div>
        </div>
      </CustomDrawer>
    </div>
  );
};

export default MobileMenu;

