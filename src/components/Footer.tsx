import { X, Linkedin, Instagram, Facebook, YoutubeSolid } from "iconoir-react";
import Logo from "./Logo";

const EachFoolterSectionLinks = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => {
  return (
    <div>
      <p className="font-inter font-regular text-[16px] text-[#FFFFFF80] pb-[16px]">
        {title}
      </p>
      <div className="flex flex-col gap-[16px]">
        {links.map((link) => (
          <p
            className="font-inter font-regular text-[16px] text-[#F6F4F1]"
            key={link}
          >
            {link}
          </p>
        ))}
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="bg-[#131211]">
      <div className="px-[20px] py-[40px] bg-[#131211] mt-[40px] flex flex-col gap-[40px] md:gap-[48px] max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-[24px] md:items-center justify-between">
          <div className="max-w-[292px]">
            <div>
              <Logo />
              <p className="font-inter font-regular text-[16px] text-[#FFFFFF]">
                Sell smarter. Grow faster — free.
              </p>
              <p className="font-inter font-regular text-[16px] text-[#716F6A]">
                Built with love in Algiers for sellers everywhere
              </p>
            </div>
            <div className="text-[#F6F4F1] flex items-center gap-[16px] pt-[24px] md:pt-[68px]">
              <X />
              <Linkedin />
              <Instagram />
              <Facebook />
              <YoutubeSolid />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center justify-center gap-x-[100px] md:grid-cols-3 md:items-start  md:justify-between">
            <EachFoolterSectionLinks
              title="Resources"
              links={["How it works", "FAQs", "Success Stories"]}
            />
            <EachFoolterSectionLinks
              title="Company"
              links={["About Us", "Careers", "Press", "Contact Us"]}
            />
            <EachFoolterSectionLinks
              title="Legal"
              links={[
                "Terms of Service",
                "Privacy Policy",
                "Press",
                "Cookie Preferences",
              ]}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[24px] md:items-center justify-between">
          <div>
            {/* socails */}
            <p className="font-inter font-regular text-[14px] text-[#FFFFFF80]">
              © 2025 ShopDZ. All rights reserved.
            </p>
          </div>
          <p className="text-[#FFFFFF80] font-inter font-regular text-[14px]">
            Arabic | Français | Tamazight | English
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
