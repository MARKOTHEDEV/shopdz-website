type Prop = {
  title: string;
  subTitle: string;
  description: string;
  list: {
    text: string;
  }[];
  img: string;
  flexDirection: "row" | "row-reverse";
};

const BannerIMageWithListOfText = ({
  title,
  description,
  subTitle,
  list = [],
  img,
  flexDirection,
}: Prop) => {
  return (
    <div
      className={`flex flex-col gap-[40px] md:flex-${flexDirection} md:items-center md:justify-between  mx-auto`}
    >
      <img src={img} className="w-[500px] " alt="" />
      <div className="md:w-[512px]">
        <p className=" font-manrope text-nowrap font-bold text-[30px] text-[#131211] leading-[40px] text-nowrap flex flex-col pb-[16px] md:leading-[56px] md:text-[48px]">
          <span className="block">{title}</span>
          <span className="block">{subTitle}</span>
        </p>
        <p className="font-inter font-regular text-[14px] text-[#3D3C39] leading-[20px]">
          {description}
        </p>

        <div className="flex flex-col gap-[16px] pt-[24px]">
          {list?.map((item, index) => (
            <div key={index} className="flex items-center gap-[12px]">
              <img
                src="/badge-check.svg"
                className="w-[32px] h-[32px]"
                alt=""
              />
              <p className="text-[#3D3C39] font-inter font-regular text-[14px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerIMageWithListOfText;
