import { useState } from "react";
import { Language, NavArrowDown } from "iconoir-react";
import Logo from "../Logo";
import Button from "../Button";
import DesktopMenuLinks from "./DesktopMenuLinks";

const DesktopMenu = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div className="max-w-[1210px] mx-auto pt-[40px] flex items-center justify-between">
      <Logo />

      <div className="flex items-center gap-[90px]">
        <div className="flex items-center gap-[24px] text-[#FFFFFFCC] font-inter font-medium text-[16px]">
          <div
            className="flex items-center gap-[7px] relative z-[100]"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <p
              className="cursor-pointer"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              Products
            </p>
            <NavArrowDown
              className={`transition-transform ${
                isProductsOpen ? "rotate-180" : ""
              }`}
            />

            {isProductsOpen && <DesktopMenuLinks />}
          </div>
          <p className="cursor-pointer">Discover</p>
          <p className="cursor-pointer">About us</p>
          <p className="cursor-pointer">Blog</p>
        </div>

        <div className="flex items-center gap-[9px]">
          <div className="flex items-center gap-[6px]">
            <Language className=" text-[#FFFFFF]" />
            <p className="text-[#FFFFFF] font-inter font-medium text-[14px]">
              ENG
            </p>
            <NavArrowDown className="text-[#B6B4AF]" />
          </div>
          <Button variant="primaryOutline">Login</Button>
          <Button variant="white">Use for free</Button>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
