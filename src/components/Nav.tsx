import Image from "next/image";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Logo from "./Logo";
import Button from "./Button";
import { ArrowRight, Language, Menu, NavArrowDown, Xmark } from "iconoir-react";
import { useState } from "react";
import CustomDrawer from "./CustomDrawer";
import { useRouter } from "next/router";

const NavItemsLinks = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  const router = useRouter();
  return (
    <div>
      <div>
        <div
          className="flex items-center justify-between"
          onClick={() => router.push(link)}
        >
          <p className="font-geist font-semibold text-[16px] text-[#131211]">
            {title}
          </p>
          <ArrowRight className="text-[#B6B4AF]" />
        </div>
        <p className="font-inter font-regular text-[14px] text-[#716F6A]">
          {description}
        </p>
      </div>
    </div>
  );
};

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
          {title}
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
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const links = [
    {
      title: "Products",
      navLinks: [
        {
          title: "Store link",
          description: "Create your online store and share your link anywhere.",
          link: "/",
        },
        {
          title: "Customers & Campaigns",
          description:
            "Manage customers and send targeted marketing that works.",
          link: "/",
        },
        {
          title: "Order Management",
          description:
            "Deliver orders fast with trusted partners, hassle-free.",
          link: "/",
        },
        {
          title: "Delivery & Fulfillment",
          description: "Track, organize, and manage every order with ease.",
          link: "/",
        },
      ],
    },
    {
      title: "Discover",
      navLinks: [],
    },
    {
      title: "How it works",
      navLinks: [],
    },
    {
      title: "About us",
      navLinks: [],
    },
    {
      title: "Blog",
      navLinks: [],
    },
  ];
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
              {links.map((link, index) => (
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

const DesktopMenu = () => {
  return <div>DesktopMenu</div>;
};

const Nav = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="bg-primary">
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </div>
  );
};

export default Nav;
