import Button from "../components/Button";
import Nav from "../components/Nav";
import { Search } from "iconoir-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getShops } from "../modules/shops/shop";
import { Shop } from "../modules/shops/types";
import MainCTA from "../components/MainCTA";
import { getLang } from "../utils/lang";

const StoreSkeleton = () => {
  return (
    <div className="flex flex-col gap-[16px] animate-pulse">
      <div className="relative w-full aspect-square overflow-hidden rounded-[12px] bg-gray-200"></div>
      <div className="flex items-center gap-[12px]">
        <div className="w-[40px] h-[40px] rounded-full bg-gray-200 shrink-0"></div>
        <div className="flex flex-col gap-[4px] w-full">
          <div className="h-[20px] w-[70%] bg-gray-200 rounded"></div>
          <div className="h-[16px] w-[40%] bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

const Store = ({ shop }: { shop: Shop }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const coverImage = shop.coverImage || "/store-image.jpg";
  // Duplicating the cover image to simulate carousel items since API doesn't return list of images yet
  const images = [coverImage, coverImage, coverImage, coverImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, currentImageIndex]);

  return (
    <div className="flex flex-col gap-[16px] group cursor-pointer">
      <div className="relative w-full aspect-square overflow-hidden rounded-[12px]">
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-full shrink-0">
              <Image src={src} alt={shop.name} fill className="object-cover" />
            </div>
          ))}
        </div>

        <div
          className="absolute bottom-[16px] left-1/2 -translate-x-1/2 flex gap-[6px] z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-[6px] h-[6px] rounded-full cursor-pointer transition-all duration-300 ${
                currentImageIndex === index
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-[12px]">
        <img
          src={shop.logoUrl || "/store-logo.png"}
          className="block w-[40px] h-[40px] rounded-full object-cover"
          alt={shop.name}
        />
        <div className="flex flex-col">
          <h3 className="text-[#131211] font-inter font-semibold text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]">
            {shop.name}
          </h3>
          <p className="text-[#716F6A] font-inter font-regular text-[14px] leading-[20px]">
            {shop.category || getLang("Fashion & Apparel")}
          </p>
        </div>
      </div>
    </div>
  );
};

const Discover = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchShopsData = async (search?: string) => {
    setIsLoading(true);
    try {
      const data = await getShops({ search });
      if (data) {
        setShops(data);
      }
    } catch (error) {
      console.error("Failed to fetch shops:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchShopsData();
  }, []);

  const handleSearch = () => {
    fetchShopsData(searchTerm);
  };

  return (
    <div>
      <div className="bg-[#FAF7FB]">
        <Nav color="#FAF7FB" variant="black" />

        <div className="px-[20px] py-[80px] md:py-[112px]">
          <h1 className="pb-[8px] text-center font-bold font-manrope text-[32px] leading-[40px] text-[#4B0182] md:leading-[56px] md:text-[48px]">
            <span className="block text-nowrap">
              {getLang("discoverHeroTitle")}
            </span>
          </h1>
          <p className="text-[#3D3C39] font-inter font-regular text-[14px] text-center">
            {getLang("discoverHeroDesc")}
          </p>

          <div className="flex items-center gap-[8px] justify-center mt-[30px] max-w-[560px] mx-auto">
            <div className="relative w-full max-w-[588px] ">
              <Search className="absolute left-[24px] top-1/2 -translate-y-1/2 text-[#716F6A] w-[24px] h-[24px]" />
              <input
                type="text"
                placeholder={getLang("Find stores")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full h-[56px] pl-[56px] pr-[24px] rounded-[100px] border border-[#E6E4E1] bg-white text-[16px] text-[#3D3C39] placeholder:text-[#716F6A] focus:outline-none focus:border-[#4B0182]"
              />
            </div>
            <Button variant="primary" onClick={handleSearch}>
              {getLang("Search")}
            </Button>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* Stores */}
      <div className="px-[20px] max-w-[1240px] mx-auto pb-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[20px] gap-y-[40px]">
          {isLoading
            ? [...new Array(10)].map((_, index) => (
                <StoreSkeleton key={index} />
              ))
            : shops.map((shop) => <Store key={shop.id} shop={shop} />)}
        </div>
      </div>
      <MainCTA />
    </div>
  );
};

export default Discover;
