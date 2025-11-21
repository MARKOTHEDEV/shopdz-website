import Button from "./Button";

const MainCTA = () => {
  return (
    <div className="px-[20px] mt-[40px] md:mt-[250px] ">
      <div className="bg-[#4B0082] rounded-[24px] h-[600px]  relative md:h-[400px] md:flex md:justify-center md:items-center md:max-w-[1200px] md:mx-auto">
        <div className="p-[24px] md:w-[560px] md:pl-[48px]">
          <p className="font-manrope font-bold text-[32px] leading-[40px] text-white pb-[16px] md:text-[40px] md:leading-[48px] md:text-nowrap">
            Create your online store today
          </p>
          <p className="font-inter font-regular text-[14px] leading-[20px] text-white pb-[28px] md:text-[16px] md:leading-[24px]">
            Take the first step toward a better way to sell. It’s quick to set
            up, easy to manage, and designed to help you focus on what you do
            best, running your business.
          </p>
          <Button variant="white">Get Started</Button>
        </div>
        <img
          src="/girl-pressing-socials-mobile.svg"
          className="block md:hidden w-full absolute bottom-0 left-0"
          alt=""
        />
        <img
          src="/girl-pressing-socials-desktop.svg"
          alt=""
          className=" hidden md:block"
        />
      </div>
    </div>
  );
};

export default MainCTA;
