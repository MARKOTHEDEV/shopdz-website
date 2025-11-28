import GeneralLayout from "../../layout/GeneralLayout";
import Nav from "../../components/Nav";
import Button from "../../components/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import HomepageSection1 from "./homepage-section-1";
import YourStoreYourWay from "./YourStoreYourWay";
import SellAnything from "./sell-anything";
import Whatbusinessowners from "./what-business-owners";
import MainCTA from "@/src/components/MainCTA";
import { getLang, useLang } from "../../utils/lang";
import { EXTERNAL_LINKS } from "../../utils/links";

const Homepage = () => {
  // Subscribe to language changes to trigger re-renders
  useLang();
  return (
    <GeneralLayout>
      <div>
        <div className="relative ">
          {/* hero section */}
          <div className="bg-primary relative z-[10] ">
            <Nav />
            <div className="pt-[80px] max-w-[353px] mx-auto text-center pb-[100px] md:pb-[50px] md:max-w-[640px]">
              <div className="relative ">
                <div className="hidden md:block absolute top-0 left-0 translate-y-[-50%] translate-x-[-59%]">
                  <motion.img
                    src="/hompage-hero-square-images/1.svg"
                    alt=""
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -15, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.5, delay: 0.2 },
                      scale: {
                        duration: 0.5,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      },
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.7,
                      },
                    }}
                  />
                </div>
                <div className="hidden md:block absolute top-0 left-0 translate-y-[-20%] translate-x-[190%]">
                  <motion.img
                    src="/hompage-hero-square-images/2.svg"
                    alt=""
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -20, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.5, delay: 0.4 },
                      scale: {
                        duration: 0.5,
                        delay: 0.4,
                        type: "spring",
                        stiffness: 200,
                      },
                      y: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.9,
                      },
                    }}
                  />
                </div>
                <div className="hidden md:block absolute bottom-0 left-0 translate-y-[20%] translate-x-[-75%]">
                  <motion.img
                    src="/hompage-hero-square-images/3.svg"
                    alt=""
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, 15, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.5, delay: 0.6 },
                      scale: {
                        duration: 0.5,
                        delay: 0.6,
                        type: "spring",
                        stiffness: 200,
                      },
                      y: {
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.1,
                      },
                    }}
                  />
                </div>
                <div className="hidden md:block absolute bottom-0 left-0 translate-y-[40%] translate-x-[200%]">
                  <motion.img
                    src="/hompage-hero-square-images/4.svg"
                    alt=""
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, 18, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.5, delay: 0.8 },
                      scale: {
                        duration: 0.5,
                        delay: 0.8,
                        type: "spring",
                        stiffness: 200,
                      },
                      y: {
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.3,
                      },
                    }}
                  />
                </div>
                <h1 className="text-[#FFFFFF] font-manrope font-bold text-[32px]  leading-[40px] pb-[16px] text-center text-nowrap  md:text-[48px] md:leading-[56px] ">
                  <span className="block  ">
                    {getLang("Sell anything, anywhere")}
                  </span>
                  <span className="block ">
                    {getLang("with your online store")}
                  </span>
                </h1>
                <p className="font-inter font-regular text-[#FFFFFF]/90 text-[14px] leading-[20px] pb-[24px] text-cent pb-[30px] md:text-[16px] md:px-4">
                  {getLang("heroDescription")}
                </p>

                <Button
                  variant="white"
                  onClick={() => window.open(EXTERNAL_LINKS.ADMIN, "_blank")}
                >
                  {getLang("Create your online store")}
                </Button>
                <p className="pt-[16px] text-center font-inter font-regular text-[#FFFFFF80] text-[14px] leading-[20px] pb-[80px]">
                  {getLang("heroFooter")}
                </p>
              </div>

              <div>
                <div className="w-[160px] mx-auto flex items-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#FFFFFF80]" />
                  <div className="w-full bg-[#FFFFFF80] h-[1px] " />
                  <div className="w-[10px] h-[10px] rounded-full bg-[#FFFFFF80]" />
                </div>
                <p className="text-nowrap text-[#FFFFFF] font-inter font-regular text-[14px] leading-[20px] pt-[32px] md:text-[16px] md:leading-[24px]">
                  <span className="block">{getLang("Trusted by fast")}</span>
                  <span className="block">{getLang("growing businesses")}</span>
                </p>

                <div className="flex items-center gap-[24px] pt-[24px] w-[320px] mx-auto md:w-[408px]">
                  {[...new Array(6)].map((image, index) => (
                    <img
                      key={index}
                      src={`/growing-businesses/${index + 1}.svg`}
                      alt="trusted-by-businesses"
                      className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
                    />
                  ))}
                </div>
              </div>
            </div>
            <img
              src="/mobile-hero-dashboard.svg"
              alt="hero-star-image"
              className="block  absolute left-0 bottom object-fit  w-[480px] translate-y-[-50px] md:hidden"
            />
            <img
              src="/desktop-hero-dashboard.svg"
              alt="desktop-hero-dashboard"
              className="hidden md:block absolute translate-y-[100%] bottom-0 left-1/2 -translate-x-1/2 w-[960px]"
            />
          </div>
          <img
            src="/hero-star-image.svg"
            alt="hero-star-image"
            className="w-full block  absolute    z-[2] translate-y-[-100px]  right-0 block md:translate-y-[-200px]"
          />
        </div>
        <div className="bg-[#FFFFFF]">
          <HomepageSection1 />
          <YourStoreYourWay />
          <SellAnything />
          <Whatbusinessowners />
          <div className="mt-[40px] md:mt-[250px] ">
            <MainCTA />
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Homepage;
