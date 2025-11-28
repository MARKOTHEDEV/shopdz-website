import { div } from "framer-motion/client";
import { BadgeCheck } from "iconoir-react";
import { getLang, useLang } from "../../utils/lang";

const HomepageSection1 = () => {
  // Subscribe to language changes to trigger re-renders
  useLang();
  const features = [
    getLang("Set up a branded online store"),
    getLang("Share your store link on WhatsApp, Tiktok or Instagram"),
    getLang("Accept payments and manage deliveries, all from one dashboard"),
  ];
  return (
    <div className="bg-[#FAF7FB]">
      <div className="pt-[400px]  px-[20px] flex flex-col gap-[40px] md:pt-[712px] md:flex-row md:items-center md:max-w-[1100px] md:mx-auto">
        <div className="md:w-[45%]">
          <p className="text-nowrap leading-[40px] font-manrope font-bold text-[32px] text-[#131211] pb-[16px] md:text-[48px] md:leading-[56px]  ">
            <span className="block ">{getLang("We make it easy for")}{"  "}</span>
            <span className="block ">{getLang("anyone to sell")}</span>
          </p>
          <p className="font-inter font-regular text-[14px] text-[#3D3C39] pb-[40px] md:text-[16px] md:leading-[24px]">
            {getLang("section1Desc")}
          </p>
          <div className="flex flex-col gap-[16px] mgap-[22px] md:gap-[20px]">
            {features.map((feat, indx) => (
              <div key={indx} className="flex items-center gap-[12px]">
                <img
                  src="/badge-check.svg"
                  className="w-[32px] h-[32px]"
                  alt=""
                />
                <p className="font-inter font-regular text-[14px] text-[#3D3C39]">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img src="/bezel.svg" className="mx-auto block" alt="" />
      </div>
    </div>
  );
};

export default HomepageSection1;
