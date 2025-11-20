import { ArrowRight } from "iconoir-react";
import { useRouter } from "next/router";

type NavItemsLinksProps = {
  title: string;
  description: string;
  link: string;
};

const NavItemsLinks = ({ title, description, link }: NavItemsLinksProps) => {
  const router = useRouter();
  return (
    <div className="md:hover:bg-[#FAF8F5] md:p-[12px] md:cursor-pointer">
      <div
        className="flex items-center justify-between"
        onClick={() => router.push(link)}
      >
        <p className="font-geist font-semibold text-[16px] text-[#131211]">
          {title}
        </p>
        <ArrowRight className="text-[#B6B4AF] md:text-[12px]" />
      </div>
      <p className="font-inter font-regular text-[14px] text-[#716F6A]">
        {description}
      </p>
    </div>
  );
};

export default NavItemsLinks;

