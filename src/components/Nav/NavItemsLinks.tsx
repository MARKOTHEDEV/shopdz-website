import { ArrowRight } from "iconoir-react";
import { useRouter } from "next/router";
import { getLang } from "../../utils/lang";

type NavItemsLinksProps = {
  title: string;
  description: string;
  link: string;
};

const NavItemsLinks = ({ title, description, link }: NavItemsLinksProps) => {
  const router = useRouter();
  return (
    <div
      className="md:hover:bg-[#FAF8F5] md:p-[12px] md:cursor-pointer"
      onClick={() => router.push(link)}
    >
      <div className="flex items-center justify-between">
        <p className="font-geist font-semibold text-[16px] text-[#131211]">
          {getLang(title)}
        </p>
        <ArrowRight className="text-[#B6B4AF] md:text-[12px]" />
      </div>
      <p className="font-inter font-regular text-[14px] text-[#716F6A]">
        {getLang(description)}
      </p>
    </div>
  );
};

export default NavItemsLinks;
