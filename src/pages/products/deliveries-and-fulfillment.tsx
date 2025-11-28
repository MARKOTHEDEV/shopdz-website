import BannerIMageWithListOfText from "@/src/components/BannerIMageWithListOfText";
import Button from "@/src/components/Button";
import MainCTA from "@/src/components/MainCTA";
import Nav from "@/src/components/Nav";
import { getLang } from "../../utils/lang";

const DeliveriesAndFulfillment = () => {
  return (
    <div>
      <div className="bg-[#4B0182] relative">
        <Nav />

        <div className="pt-[64px] px-[20px]  md:max-w-[1210px] md:mx-auto md:flex md:items-center md:justify-between md:gap-[90px]">
          <div className="md:w-[589px] md:translate-y-[-40px] ">
            <p className="font-inter font-regular text-[14px] text-[#FFFFFF80] pb-[16px]">
              {getLang("DELIVERIES & FULFILLMENT")}
            </p>
            <p className="font-manrope font-bold text-[32px] text-[#FFFFFF] pb-[16px] leading-[40px] md:text-nowrap md:leading-[56px] md:text-[48px]">
              <span className=" md:block">{getLang("Less Hassle.")} </span>
              <span className="md:block">{getLang("Faster Fulfillment.")}</span>
            </p>
            <p className="font-inter font-regular text-[14px] leading-[20px] text-[#FFFFFF] pb-[30px] md:text-[15px] md:leading-[24px] md:pb-[30px]">
              {getLang("dfHeroDesc")}
            </p>

            <Button>{getLang("Start fulfilling orders")}</Button>
            <div className="items-center text-[#FFFFFF80] font-inter font-regular text-[14px] leading-[20px] flex flex-wrap gap-1 pt-[16px]">
              <p>{getLang("No setup fees")}</p>
              <div className="w-[2px] h-[2px] bg-[#FFFFFF80] rounded-full" />
              <p>{getLang("No technical skills needed")}</p>
              <div className="w-[2px] h-[2px] bg-[#FFFFFF80] rounded-full" />
              <p>{getLang("Multi-language support")}</p>
            </div>
          </div>
          <img
            src="/deliveries-and-fulfillment-banner.svg"
            className="mx-auto  block  mt-[50px] md:mt-[unset] md:flex-1 md:mx-[unset] md:translate-y-[-20px]"
            alt="store-link"
          />
        </div>
      </div>

      <div className="px-[20px] pt-[40px] max-w-[1100px] mx-auto flex flex-col gap-[40px]">
        <BannerIMageWithListOfText
          title={getLang("Flexible Delivery")}
          subTitle={getLang("Options")}
          description={getLang("dfFeature1Desc")}
          list={[
            { text: getLang("Offer prepaid or pay-on-delivery options") },
            { text: getLang("Select from multiple delivery providers") },
            { text: getLang("Give customers delivery flexibility.") },
          ]}
          img="/Frame916.svg"
          flexDirection="row-reverse"
        />

        <BannerIMageWithListOfText
          title={getLang("Seamless Order")}
          subTitle={getLang("Fulfillment")}
          description={getLang("dfFeature2Desc")}
          list={[
            { text: getLang("Automatic delivery booking with partners") },
            { text: getLang("Real-time pickup and delivery coordination") },
            { text: getLang("Secure and reliable order handling") },
          ]}
          img="/seamless-order-fulfillment.svg"
          flexDirection="row"
        />

        <BannerIMageWithListOfText
          title={getLang("Track Every Shipment")}
          subTitle=""
          description={getLang("dfFeature3Desc")}
          list={[
            { text: getLang("View pending, processing, and fulfilled orders") },
            { text: getLang("Access complete delivery details and timelines") },
            { text: getLang("Keep customers updated on their orders.") },
          ]}
          img="/track-every-shipment.svg"
          flexDirection="row-reverse"
        />
      </div>

      <div className="text-center bg-[#FAF7FB] py-[48px] px-[20px] flex flex-col gap-[16px] items-center my-[40px]">
        <div className="flex flex-col gap-[16px] items-center max-w-[560px] mx-auto">
          <h2 className="font-manrope font-bold  text-[32px] leading-[40px] md:text-[48px] md:text-[#131211] md:leading-[56px] ">
            <span className="block">
              {getLang("Deliver Every Order with ")}
            </span>
            <span className="block">{getLang("Ease")}</span>
          </h2>
          <p className="text-[#3D3C39] font-inter font-regular text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]  ">
            {getLang("dfCtaDesc")}
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

export default DeliveriesAndFulfillment;
