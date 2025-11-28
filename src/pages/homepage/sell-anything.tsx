import Button from "@/src/components/Button";
import { getLang, useLang } from "../../utils/lang";
import { EXTERNAL_LINKS } from "../../utils/links";

const SellAnything = () => {
  // Subscribe to language changes to trigger re-renders
  useLang();
  return (
    <div
      className=" rounded-[48px] mt-[48px] max-w-[1100px] mx-auto  overflow-hidden relative md:h-[640px]"
      style={{
        boxShadow: "0px 32px 64px 0px #4B00820D",
      }}
    >
      <div className="flex items-center flex-col justify-center p-[24px]  md:w-[640px] md:mx-auto md:translate-y-[50px]">
        <p className="font-manrope font-bold text-[32px] text-[#131211] pb-[16px] leading-[40px] md:text-nowrap text-center md:text-[48px] md:leading-[56px]">
          <span className=" md:block">{getLang("Sell anything, anywhere")} </span>
          <span className="block">{getLang("with your online store")}</span>
        </p>
        <p className="font-inter font-regular text-[14px] text-[#131211] leading-[20px] text-center pb-[24px] md:text-[16px] md:leading-[24px] ">
          {getLang("sellDesc")}
        </p>
        <Button
          variant="primary"
          className="mx-auto text-center"
          onClick={() => window.open(EXTERNAL_LINKS.ADMIN, "_blank")}
        >
          {getLang("Use for free")}
        </Button>
      </div>

      <img
        src="/flat-lay-black-friday-gifts.svg"
        className=" mx-auto w-full md:absolute md:bottom-[-100px] md:left-0 block"
        alt=""
      />
    </div>
  );
};

export default SellAnything;
