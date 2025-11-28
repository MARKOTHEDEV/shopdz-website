import { useMediaQuery } from "../../hooks/useMediaQuery";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Nav = ({
  color,
  variant = "white",
}: {
  color?: string;
  variant?: "white" | "black";
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={` relative ${color ? `bg-[${color}]` : "bg-primary"}`}>
      {isMobile ? (
        <MobileMenu colorVariant={variant} />
      ) : (
        <DesktopMenu colorVariant={variant} />
      )}
    </div>
  );
};

export default Nav;
