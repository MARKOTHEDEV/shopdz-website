import NavItemsLinks from "./NavItemsLinks";
import { productsLinks } from "./navLinks";

const DesktopMenuLinks = () => {
  return (
    <div
      className="rounded-[24px] absolute bottom-[-12px] translate-y-full translate-x-[-40%] left-0  w-[650px] grid grid-cols-2 gap-[16px] bg-white py-[10px] px-[16px]"
      style={{
        boxShadow: "0px 16px 24px 0px #20043526",
      }}
    >
      {productsLinks.map((item, index) => (
        <NavItemsLinks {...item} key={index} />
      ))}
    </div>
  );
};

export default DesktopMenuLinks;

