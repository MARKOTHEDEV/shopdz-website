import BannerIMageWithListOfText from "@/src/components/BannerIMageWithListOfText";
import Button from "@/src/components/Button";
import MainCTA from "@/src/components/MainCTA";
import Nav from "@/src/components/Nav";
import { getLang } from "../../utils/lang";

const CustomerAndCampaign = () => {
  return (
    <div>
      <div className="bg-[#50D0FF] relative">
        <Nav color={"#50D0FF"} />

        <div className="pt-[64px] px-[20px]  md:max-w-[1210px] md:mx-auto md:flex md:items-center md:justify-between md:gap-[90px]">
          <div className="md:w-[589px] md:self-start">
            <p className="font-inter font-regular text-[14px] text-[#4B0082] pb-[16px]">
              {getLang("CUSTOMERS & CAMPAIGNS")}
            </p>
            <p className="font-manrope font-bold text-[32px] text-[#4B0082] pb-[16px] leading-[40px] md:text-nowrap md:leading-[56px] md:text-[48px]">
              <span className=" md:block">
                {getLang("Know Your Customers.")}
              </span>
              <span className="md:block">{getLang("Engage Them Better.")}</span>
            </p>
            <p className="font-inter font-regular text-[14px] leading-[20px] text-[#4B0082] pb-[30px] md:text-[15px] md:leading-[24px] md:pb-[30px]">
              {getLang("ccHeroDesc")}
            </p>

            <Button>{getLang("Create your store")}</Button>
            <div className="items-center text-[#4B0082] font-inter font-regular text-[14px] leading-[20px] flex flex-wrap gap-1 pt-[16px]">
              <p>{getLang("No setup fees")}</p>
              <div className="w-[2px] h-[2px] bg-[#FFFFFF80] rounded-full" />
              <p>{getLang("No technical skills needed")}</p>
              <div className="w-[2px] h-[2px] bg-[#FFFFFF80] rounded-full" />
              <p>{getLang("Multi-language support")}</p>
            </div>
          </div>
          <img
            src="/CAMPAIGNSBanner.svg"
            className="mx-auto  block  mt-[50px] md:mt-[unset] md:flex-1 md:mx-[unset]"
            alt="store-link"
          />
        </div>
      </div>

      <div className="px-[20px] pt-[40px] max-w-[1100px] mx-auto flex flex-col gap-[40px]">
        <BannerIMageWithListOfText
          title={getLang("Customer Insights at")}
          subTitle={getLang("Your Fingertips")}
          description={getLang("ccFeature1Desc")}
          list={[
            { text: getLang("View detailed customer lists") },
            {
              text: getLang(
                "See lifetime order counts and revenue per customer"
              ),
            },
            { text: getLang("Identify top spenders and frequent buyers") },
          ]}
          img="/your-fingertips.svg"
          flexDirection="row-reverse"
        />

        <BannerIMageWithListOfText
          title={getLang("Run Powerful")}
          subTitle={getLang("Marketing Campaigns")}
          description={getLang("ccFeature2Desc")}
          list={[
            { text: getLang("Send campaigns to all or specific customers") },
            {
              text: getLang(
                "Track open rates, campaigns sent, and conversions"
              ),
            },
            { text: getLang("Optimize based on real-time performance data.") },
          ]}
          img="/run-powerfull.svg"
          flexDirection="row"
        />

        <BannerIMageWithListOfText
          title={getLang("AI-Powered Campaign")}
          subTitle={getLang("Creation")}
          description={getLang("ccFeature3Desc")}
          list={[
            { text: getLang("Use ready-made campaign ideas") },
            { text: getLang("Generate high-converting copy with AI") },
            {
              text: getLang(
                "Save time while keeping campaigns fresh and relevant."
              ),
            },
          ]}
          img="/ai-powered-campaign.svg"
          flexDirection="row-reverse"
        />
      </div>

      <div className="text-center bg-[#FAF7FB] py-[48px] px-[20px] flex flex-col gap-[16px] items-center my-[40px]">
        <div className="flex flex-col gap-[16px] items-center max-w-[560px] mx-auto">
          <h2 className="font-manrope font-bold  text-[32px] leading-[40px] md:text-[48px] md:text-[#131211] md:leading-[56px] ">
            <span className="block">{getLang("Turn Customer Insights")}</span>
            <span className="block">{getLang("into Sales")}</span>
          </h2>
          <p className="text-[#3D3C39] font-inter font-regular text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]  ">
            {getLang("ccCtaDesc")}
          </p>
          <Button variant="primary" className="">
            {getLang("Get started")}
          </Button>
        </div>
      </div>
      <MainCTA />
    </div>
  );
};

export default CustomerAndCampaign;
