import BannerIMageWithListOfText from "@/src/components/BannerIMageWithListOfText";
import Button from "@/src/components/Button";
import MainCTA from "@/src/components/MainCTA";
import Nav from "@/src/components/Nav";
import { getLang } from "../../utils/lang";

const OrderManagement = () => {
  return (
    <div>
      <div className="bg-[#50D0FF] relative">
        <Nav color={"#50D0FF"} />

        <div className="pt-[64px] px-[20px]  md:max-w-[1210px] md:mx-auto md:flex md:items-center md:justify-between ">
          <div className="md:w-[589px] md:self-start md:translate-y-[40px]">
            <p className="font-inter font-regular text-[14px] text-[#4B0082] pb-[16px]">
              {getLang("ORDER MANAGEMENT")}
            </p>
            <p className="font-manrope font-bold text-[32px] text-[#4B0082] pb-[16px] leading-[40px] md:text-nowrap md:leading-[56px] md:text-[48px]">
              <span className=" md:block">
                {getLang("All the Tools to Stay on .")}
              </span>
              <span className="md:block">{getLang("Top of Every Order")}</span>
            </p>
            <p className="font-inter font-regular text-[14px] leading-[20px] text-[#4B0082] pb-[30px] md:text-[15px] md:leading-[24px] md:pb-[30px]">
              {getLang("omHeroDesc")}
            </p>

            <Button>{getLang("Start engaging customers")}</Button>
            <div className="items-center text-[#4B0082] font-inter font-regular text-[14px] leading-[20px] flex flex-wrap gap-1 pt-[16px]">
              <p>{getLang("No setup fees")}</p>
              <div className="w-[2px] h-[2px] bg-[#FFFFFF80] rounded-full" />
              <p>{getLang("No technical skills needed")}</p>
              <div className="w-[2px] h-[2px] bg-[#FFFFFF80] rounded-full" />
              <p>{getLang("Multi-language support")}</p>
            </div>
          </div>
          <img
            src="/order-management-banner.svg"
            className="mx-auto  block  mt-[50px] md:mt-[unset] md:w-[650px] lg:flex-1 md:mx-[unset] md:translate-y-[-40px]"
            alt="store-link"
          />
        </div>
      </div>

      <div className="px-[20px] pt-[40px] max-w-[1100px] mx-auto flex flex-col gap-[40px]">
        <BannerIMageWithListOfText
          title={getLang("See Your Orders in One")}
          subTitle={getLang("View")}
          description={getLang("omFeature1Desc")}
          list={[
            { text: getLang("Filter orders by status for faster tracking.") },
            { text: getLang("Search orders by date, ID, or customer.") },
            { text: getLang("View order history at a glance.") },
          ]}
          img="/see-your-orders-in-one.svg"
          flexDirection="row-reverse"
        />

        <BannerIMageWithListOfText
          title={getLang("Access Full Order &")}
          subTitle={getLang("Customer Details")}
          description={getLang("omFeature2Desc")}
          list={[
            {
              text: getLang(
                "Check the list of ordered products and quantities."
              ),
            },
            {
              text: getLang("View customer contact info and delivery address."),
            },
            {
              text: getLang(
                "See special instructions or notes attached to the order."
              ),
            },
          ]}
          img="/access-full-rder.svg"
          flexDirection="row"
        />

        <BannerIMageWithListOfText
          title={getLang("Manage Invoices &")}
          subTitle={getLang("Updates")}
          description={getLang("omFeature3Desc")}
          list={[
            {
              text: getLang(
                "Generate and send invoices directly to customers."
              ),
            },
            { text: getLang("View payment status in real time.") },
            {
              text: getLang(
                "Update order statuses and send notifications instantly."
              ),
            },
          ]}
          img="/manage-invoices.svg"
          flexDirection="row-reverse"
        />
      </div>

      <div className="text-center bg-[#FAF7FB] py-[48px] px-[20px] flex flex-col gap-[16px] items-center my-[40px]">
        <div className="flex flex-col gap-[16px] items-center max-w-[560px] mx-auto">
          <h2 className="font-manrope font-bold  text-[32px] leading-[40px] md:text-[48px] md:text-[#131211] md:leading-[56px] ">
            <span className="block">{getLang("Turn Order Chaos into")}</span>
            <span className="block">{getLang("Clarity")}</span>
          </h2>
          <p className="text-[#3D3C39] font-inter font-regular text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]  ">
            {getLang("omCtaDesc")}
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

export default OrderManagement;
