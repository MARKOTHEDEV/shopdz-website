import { NavArrowDown } from "iconoir-react";
import NavItemsLinks from "./NavItemsLinks";
import { getLang } from "../../utils/lang";

type MobileMenueDropDownProps = {
  title: string;
  navLinks: { title: string; description: string; link: string }[];
  isOpen: boolean;
  onToggle: () => void;
};

const MobileMenueDropDown = ({
  title,
  navLinks,
  isOpen,
  onToggle,
}: MobileMenueDropDownProps) => {
  return (
    <div>
      <div onClick={onToggle} className="flex items-center gap-[9px]">
        <p className="font-manrope font-bold text-[24px] text-[#131211]">
          {getLang(title)}
        </p>
        {navLinks.length > 0 && (
          <NavArrowDown className={`${isOpen ? "rotate-180" : ""}`} />
        )}
      </div>

      {isOpen && (
        <div className="flex flex-col gap-[24px] mt-[16px] pt-[16px] border-t-[1px] border-[#ECEAE7]">
          {navLinks.map((link) => (
            <NavItemsLinks key={link.title} {...link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenueDropDown;

