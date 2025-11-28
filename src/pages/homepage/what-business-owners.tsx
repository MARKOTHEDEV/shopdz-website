import { getLang, useLang } from "../../utils/lang";

const EachComment = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-[24px] w-full p-[24px]">
      <div className="flex items-center gap-[12px] pb-[24px]">
        <img
          src="/dummy-shop-image.svg"
          className="block w-[48px] h-[48px] rounded-full"
          alt=""
        />
        <div>
          <p className="font-manrope font-bold text-[16px] ">
            Algeria Craft Co.
          </p>
          <p className="font-inter font-regular text-[16px] text-[#131211]">
            Yasmina Bouchareb
          </p>
        </div>
      </div>
      <p className="font-regular font-inter  text-[14px] leading-[20px] text-[#3D3C39]">
        "ShopDZ has transformed my business! The ease of setting up my online
        store allowed me to focus on what I love—selling unique crafts. Highly
        recommend!"
      </p>
    </div>
  );
};

const Whatbusinessowners = () => {
  // Subscribe to language changes to trigger re-renders
  useLang();
  return (
    <div className="relative pt-[64px] ">
      <div className="bg-[#FAF7FB] px-[20px] pt-[64px] relative z-[10] pb-[64px] md:pb-[0px]">
        <div className="max-w-[1100px] mx-auto">
          <div className="pb-[40px]">
            <p className="text-center text-[#131211] font-manrope font-bold text-[32px] leading-[40px] text-nowrap pb-[16px] md:text-[48px] md:leading-[56px] ">
              <span className="block">{getLang("What business")}</span>
              <span className="block">{getLang("owners say about us")}</span>
            </p>
            <p className="font-inter font-regular text-[14px] leading-[20px] text-[#131211] leading-[20px] text-center md:text-[16px] md:leading-[24px]">
              {getLang("testimonialsDesc")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-[16px]">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-full md:w-[calc((100%-32px)/3)]">
                <EachComment />
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src="/subtract-pink.svg"
        alt=""
        className="hidden md:block w-full absolute bottom-0 left-0  md:translate-y-[30%]  z-[2]"
      />
    </div>
  );
};

export default Whatbusinessowners;
