const Section1 = () => {
  return (
    <div className="  rounded-[24px] bg-[#E5F8FF] p-[24px] md:flex md:flex-row-reverse   mx-auto md:pr-[unset] md:h-[560px] md:overflow-hidden mb-[30px]">
      <img
        src="/upload-and-manage.svg"
        className="block mx-auto   scale-[1.16] translate-y-2 md:scale-[1.20] md:translate-y-[70px] md:translate-x-[40px] md:w-[50%]"
        alt=""
      />

      <div className="md:w-[400px]">
        <p className="font-manrope font-bold text-[24px] text-[#3D3C39] pb-[16px] leading-[28px] text-nowrap md:text-[32px] md:leading-[40px]">
          <span className="block">Upload and manage</span>
          <span className="block">products with ease.</span>
        </p>
        <p className="font-regular font-inter text-[14px] text-[#3D3C39] leading-[20px] md:text-[16px] md:leading-[24px]">
          Stay in control of your products with tools that keep things simple
          and flexible.
        </p>
      </div>
    </div>
  );
};
const Section2 = () => {
  return (
    <div className="border-[#DCBBFC] border-[1px] rounded-[24px] bg-[#FAF7FB] px-[24px] pb-[24px] md:h-[540px]">
      <img src="/your-store-link.svg" alt="" />
      <div>
        <p className="font-manrope font-bold  text-[24px] text-[#131211] text-nowrap pb-[16px] leading-[28px] md:text-[32px] md:leading-[40px]">
          <span className="block">Your store link is made</span>
          <span className="block">for sharing.</span>
        </p>
        <p className="font-regular font-inter text-[14px] leading-[20px] text-[#3D3C39] md:text-[16px] md:leading-[24px]">
          Share your store anywhere your customers are, from chats to socials.
        </p>
      </div>
    </div>
  );
};
const Section3 = () => {
  return (
    <div className="border-[#FFD889] border-[1px] rounded-[24px] bg-[#FEF3E5] px-[24px] pb-[24px]  md:h-[540px] overflow-hidden">
      <img
        src="/how-they-pay.svg"
        className="scale-[1.16] translate-y-4  md:hidden   "
        alt=""
      />
      <img
        src="how-they-pay-desktop.svg"
        className="hidden  translate-y-[-40px] translate-x-[25px] md:block"
        alt=""
      />

      <div className="md:translate-y-[-110px]">
        <p className="font-manrope font-bold  text-[24px] text-[#131211] text-nowrap pb-[16px] leading-[28px] md:text-[32px] md:leading-[40px]">
          <span className="block">Let your customers choose</span>
          <span className="block">how they pay.</span>
        </p>
        <p className="font-regular font-inter text-[14px] leading-[20px] text-[#3D3C39] md:text-[16px] md:leading-[24px]">
          Offer the flexibility your customers need to make buying easy and
          comfortable.
        </p>
      </div>
    </div>
  );
};

const YourStoreYourWay = () => {
  return (
    <div className="pt-[70px] px-[20px] md:w-[1100px] md:mx-auto">
      <div className="text-center pb-[48px] md:w-[560px] md:mx-auto">
        <h1 className="font-manrope font-bold text-[32px] text-[#3D3C39] pb-[16px] md:text-[48px] md:leading-[56px]">
          Your Store, Your Way
        </h1>
        <p className="font-inter font-regular text-[14px] text-[#3D3C39] md:text-[16px] md:leading-[24px]">
          Whether you’re just starting out or growing fast, your store should
          feel like you. Build and run your business the way that works best for
          you.
        </p>
      </div>

      <div className="">
        <Section1 />
        <div className="flex gap-[32px] flex-col md:flex-row md:items-center ">
          <Section2 />
          <Section3 />
        </div>
      </div>
    </div>
  );
};

export default YourStoreYourWay;
