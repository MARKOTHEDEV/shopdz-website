import { useMediaQuery } from "../../hooks/useMediaQuery";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Nav = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="bg-primary relative ">
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </div>
  );
};

export default Nav;
