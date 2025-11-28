import BannerIMageWithListOfText from "@/src/components/BannerIMageWithListOfText";
import Button from "@/src/components/Button";
import MainCTA from "@/src/components/MainCTA";
import Nav from "@/src/components/Nav";
import { Mail, MessageText } from "iconoir-react";
import { getLang } from "../utils/lang";
import { EXTERNAL_LINKS } from "../utils/links";

const ContactCard = ({
  title,
  description,
  image,
  buttonText = "Send an email",
}: {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  buttonText?: string;
}) => {
  return (
    <div className="bg-white rounded-[24px] p-[24px]">
      <div className="h-[40px] w-[40px] border-[1px] border-[#ECEAE7] rounded-full flex items-center justify-center">
        <Mail className="text-[15px]" />
      </div>
      <p className="font-manrope font-bold text-[24px] text-[#131211] pb-[8px]">
        {getLang(title)}
      </p>
      <p className="text-[#3D3C39] font-regular font-inter text-[14px]  pb-[10px]">
        {getLang(description)}
      </p>
      <Button variant="primary">{getLang(buttonText)}</Button>
    </div>
  );
};
const About = () => {
  return (
    <div className="">
      <div className="bg-[#4B0182] relative">
        <Nav />

        <div className="pt-[64px] px-[20px]  md:max-w-[1210px] md:mx-auto md:flex md:items-center md:justify-between md:gap-[90px]">
          <div className="md:w-[589px] md:translate-y-[-40px] ">
            <p className="font-inter font-regular text-[14px] text-[#FFFFFF80] pb-[16px]">
              {getLang("ABOUT US")}
            </p>
            <p className="font-manrope font-bold text-[32px] text-[#FFFFFF] pb-[16px] leading-[40px] md:text-nowrap md:leading-[56px] md:text-[48px]">
              <span className=" md:block">
                {getLang("Built for Sellers.")}{" "}
              </span>
              <span className="md:block">{getLang("Backed by Purpose.")}</span>
            </p>
            <p className="font-inter font-regular text-[14px] leading-[20px] text-[#FFFFFF] pb-[30px] md:text-[15px] md:leading-[24px] md:pb-[30px]">
              {getLang("aboutHeroDesc")}
            </p>

            <Button onClick={() => window.open(EXTERNAL_LINKS.ADMIN, "_blank")}>
              {getLang("Use for free")}
            </Button>
            <div className="items-center text-[#FFFFFF80] font-inter font-regular text-[14px] leading-[20px] flex flex-wrap gap-1 pt-[16px]">
              <p>{getLang("No setup fees")}</p>
              <div className="w-[2px] h-[2px] bg-[#FFFFFF80] rounded-full" />
              <p>{getLang("No technical skills needed")}</p>
              <div className="w-[2px] h-[2px] bg-[#FFFFFF80] rounded-full" />
              <p>{getLang("Multi-language support")}</p>
            </div>
          </div>
          <img
            src="/about-use-banner.svg"
            className="mx-auto  block  mt-[50px] md:mt-[unset] md:flex-1 md:mx-[unset] md:translate-y-[-20px]"
            alt="store-link"
          />
        </div>
        <br />
        <br />
      </div>

      <div className="px-[20px] pt-[64px] flex flex-col gap-[64px] max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-[48px] md:flex-row md:items-center gap-[80px]">
          <div>
            <p className=" font-manrope font-bold text-[32px] leading-[40px] md:text-[48px] md:text-[#131211] md:leading-[56px]">
              <span className="block text-nowrap">
                {getLang("missionTitle")}
              </span>
            </p>
            <div className="font-inter flex flex-col gap-[16px] font-regular text-[16px]  text-[#3D3C39] pt-[16px] ">
              <p className="leading-[20px] md:leading-[24px]">
                {getLang("missionDesc1")}
              </p>
              <p className="leading-[20px] md:leading-[24px]">
                {getLang("missionDesc2")}
              </p>
            </div>
          </div>
          <img
            src="/our-goal-to-make.svg"
            className="md:block md:w-[560px] md:h-[480px]"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-[48px] md:flex-row-reverse md:items-center gap-[80px]">
          <div>
            <p className="text-norwrap font-manrope font-bold text-[32px] leading-[40px] md:text-[48px] md:text-[#131211] md:leading-[56px] ">
              {getLang("Our mission")}
            </p>
            <div className="font-inter flex flex-col gap-[16px] font-regular text-[16px] leading-[20px] text-[#3D3C39] pt-[16px] md:leading-[24px]">
              <p className="leading-[20px] md:leading-[24px]">
                {getLang("ourMissionDesc1")}
              </p>
              <p className="leading-[20px] md:leading-[24px]">
                {getLang("ourMissionDesc2")}
              </p>
              <p className="leading-[20px] md:leading-[24px]">
                {getLang("ourMissionDesc3")}
              </p>
            </div>
          </div>
          <img
            src="/our-mission-about.svg"
            className="md:block md:w-[480px] md:h-[427x]"
            alt=""
          />
        </div>
      </div>

      <div className=" bg-[#FAF7FB]">
        <div className="flex flex-col  gap-[64px] bg-[#FAF7FB] py-[48px] px-[20px]  my-[40px] md:flex-row md:gap-[80px] max-w-[1200px] mx-auto">
          <div className="md:w-[560px]">
            <p className="font-manrope font-bold text-[32px] leading-[40px] md:text-[48px] md:text-[#131211] md:leading-[56px] pb-[16px]">
              <span className="block text-nowrap">
                {getLang("contactHeading")}
              </span>
            </p>
            <p className="text-[#3D3C39] font-regular text-[14px] leading-[20px]">
              {getLang("contactDesc")}
            </p>
          </div>

          <div className="flex flex-col gap-[24px] md:w-[560px]">
            <ContactCard
              title="Contact us via email"
              description="Contact us at hello@shop.dz"
              image="/email.svg"
              icon={<Mail className="text-[15px]" />}
            />
            <ContactCard
              title="Contact us via phone"
              description="Chat with us directly on WhatsApp"
              image="/email.svg"
              icon={<MessageText className="text-[15px]" />}
              buttonText={"Send a WhatsApp message "}
            />
          </div>
        </div>
      </div>
      <MainCTA />
    </div>
  );
};

export default About;
