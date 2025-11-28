import BannerIMageWithListOfText from "@/src/components/BannerIMageWithListOfText";
import Button from "@/src/components/Button";
import Nav from "@/src/components/Nav";
import { getLang } from "../../utils/lang";

const StoreLink = () => {
  return (
    <div>
      <div className="bg-[#4B0182] relative">
        <Nav />

        <div className="pt-[64px] px-[20px]  md:max-w-[1210px] md:mx-auto md:flex md:items-center md:justify-between md:gap-[90px]">
          <div className="md:w-[589px] md:self-start">
            <p className="font-inter font-regular text-[14px] text-[#FFFFFF80] pb-[16px]">
              {getLang("STORE LINK")}
            </p>
            <p className="font-manrope font-bold text-[32px] text-[#FFFFFF] pb-[16px] leading-[40px] md:text-nowrap md:leading-[56px] md:text-[48px]">
              <span className=" md:block">
                {getLang("Your Online Storefront in")}
              </span>
              <span className="md:block">{getLang("One Simple Link")}</span>
            </p>
            <p className="font-inter font-regular text-[14px] leading-[20px] text-[#FFFFFF] pb-[30px] md:text-[15px] md:leading-[24px] md:pb-[30px]">
              {getLang("slHeroDesc")}
            </p>

            <Button>{getLang("Create your store")}</Button>
            <div className="items-center text-[#FFFFFF80] font-inter font-regular text-[14px] leading-[20px] flex flex-wrap gap-1 pt-[16px]">
              <p>{getLang("No setup fees")}</p>
              <div className="w-[2px] h-[2px] bg-[#FFFFFF80] rounded-full" />
              <p>{getLang("No technical skills needed")}</p>
              <div className="w-[2px] h-[2px] bg-[#FFFFFF80] rounded-full" />
              <p>{getLang("Multi-language support")}</p>
            </div>
          </div>
          <img
            src="/simple-link.svg"
            className="mx-auto  block  mt-[50px] md:mt-[unset] md:flex-1 md:mx-[unset]"
            alt="store-link"
          />
        </div>
      </div>

      <div className="px-[20px] pt-[40px] max-w-[1100px] mx-auto flex flex-col gap-[40px]">
        <BannerIMageWithListOfText
          title={getLang("Add Products &")}
          subTitle={getLang("Categories with ease")}
          description={getLang("slFeature1Desc")}
          list={[
            { text: getLang("Organize items with clear categories.") },
            { text: getLang("Add unlimited products and descriptions.") },
            {
              text: getLang(
                "Set prices, discounts, and availability instantly."
              ),
            },
          ]}
          img="/Frame916.svg"
          flexDirection="row"
        />

        <BannerIMageWithListOfText
          title={getLang("Share Your Store Link")}
          subTitle={getLang("Anywhere")}
          description={getLang("slFeature2Desc")}
          list={[
            {
              text: getLang(
                "Share on Instagram, TikTok, X (Twitter), and more"
              ),
            },
            { text: getLang("Easy to send via chat or DMs") },
            { text: getLang("One link that shows your entire store.") },
          ]}
          img="/share-yourstore-link-anywhere.svg"
          flexDirection="row-reverse"
        />

        <BannerIMageWithListOfText
          title={getLang("Seamless Experience for")}
          subTitle={getLang("Customers")}
          description={getLang("slFeature3Desc")}
          list={[
            { text: getLang("Customers browse and add items to cart") },
            { text: getLang("Orders sent to your WhatsApp or store checkout") },
            { text: getLang("Flexible buying process to suit any customer.") },
          ]}
          img="/Frame-916.svg"
          flexDirection="row"
        />
      </div>
    </div>
  );
};

export default StoreLink;
