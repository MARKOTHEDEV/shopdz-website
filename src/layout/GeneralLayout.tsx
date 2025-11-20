import Nav from "../components/Nav";
import Footer from "../components/Footer";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default GeneralLayout;
