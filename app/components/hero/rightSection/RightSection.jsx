import React from "react";
import Image from "next/image";
import ArrowSticker from "../../../../public/assets/images/home_page/menu_stickers/Arrow.svg";
import DarkPlayStore from "../../../../public/assets/images/home_page/Dark-playstore.svg";
import DarkAppStore from "../../../../public/assets/images/home_page/Dark-applestore.svg";
import MobArraow from "../../../../public/assets/images/home_page/menu_stickers/mobile-arrow.svg";

const RightSection = () => {
  return (
    <>
      <div className="relative mx-auto grid h-[250px] w-[320px] max-w-[100%] grid-cols-2 gap-0  sm:grid-cols-2 md:grid-cols-2">
        <img
          src="/assets/images/home_page/menu_stickers/about-layerblur.svg"
          className=" h-[112px] w-[112px] top-[10%] hover:scale-105 absolute sm:left-[12%] sm:top-[-5%] sm:h-[120px] sm:w-[120px] md:left-[12%] md:top-[-5%] md:h-[140px] md:w-[140px] lg:left-[4%] lg:top-[-18%] lg:h-[190px] lg:w-[190px] xl:left-[-18%] xl:top-[-20%] xl:h-[14.8413rem] xl:w-[14.8413rem]"
          alt="about kreatr"
        />
        <img
          src="/assets/images/home_page/menu_stickers/app2.svg"
          alt="app"
          className=" absolute sm:rotate-[-10deg] left-[29%] top-[18%] h-[73.86px] w-[123.99px] hover:scale-105 sm:left-[44%] sm:top-[6%] sm:h-[70px] sm:w-[125px] md:right-[6%] md:top-[4%]  md:h-[90px] md:w-[155px] lg:left-[53%] lg:top-[-8px] lg:h-[120px] lg:w-[12.5rem] xl:left-[40%] xl:top-[5%] xl:h-[9.6244rem] xl:w-[16.1569rem] "
        />
        <img
          src="/assets/images/home_page/menu_stickers/events-new.svg"
          className="absolute top-[55%] h-[35.23px] w-[125.8px] rotate-[20deg] hover:scale-105 sm:right-[16%] sm:top-[57%] sm:h-[38px] sm:w-[145px] sm:rotate-0 md:right-[6%]  md:top-[64%] md:h-[50px] md:w-[9.875rem] lg:left-[44%] lg:top-[76%] lg:h-[60px] lg:w-[200px] xl:left-[28%] xl:top-[106%] xl:h-[4.6775rem] xl:w-[16.7031rem] "
          alt="events"
        />
        <img
          src="/assets/images/home_page/menu_stickers/know-community.svg"
          className="absolute right-[26%] top-[43%] h-[58.6px] w-[157.56px] hover:scale-105 sm:right-[12%] sm:top-[34%] sm:h-[60px] sm:w-[160px] md:right-[1%] md:top-[36%] md:h-[75px] md:w-[180px] lg:left-[42%] lg:top-[42%] lg:h-[90px]  lg:w-[230px] xl:left-[25%] xl:top-[64%] xl:h-[6.9806rem] xl:w-[18.7694rem]"
          alt="know community"
        />
        <img
          src="/assets/images/home_page/menu_stickers/contact-new.svg"
          className="absolute right-[10%] top-[18%] rotate-[5deg] h-[97.85px] w-[76.09px] hover:scale-105 sm:right-[58%] sm:top-[38%] sm:h-[100px] sm:w-[80px] md:right-[52%] md:top-[44%] md:h-[120px] md:w-[95px] lg:left-[10%] lg:top-[46%]  lg:h-[160px] lg:w-[120px] xl:left-[-12%] xl:top-[64%] xl:h-[12.7306rem] xl:w-[9.9rem]"
          alt="contact"
        />
        <Image
          className="absolute hidden sm:left-[24%] sm:top-[77%] sm:block sm:h-[126px] sm:w-[5.6875rem] md:left-[28%] md:top-[90%] md:h-[10.375rem] md:w-[6.6875rem] lg:left-[24%] lg:top-[92%] lg:h-[16rem] lg:w-[7.625rem] xl:left-[10%] xl:top-[138%] xl:h-271 xl:w-132 "
          src={ArrowSticker}
        />
        <Image
          className="absolute right-[16%] top-[-12%] h-55 w-48 sm:hidden "
          src={MobArraow}
        />
        <img
          src="/assets/images/home_page/menu_stickers/menu-new.svg"
          className=" absolute right-[5%] top-[-36%] h-[41.84px] w-[78.99px] sm:right-[25%] sm:top-[94%] sm:h-[40px] sm:w-[80px] md:right-[18%] md:top-[108%] md:h-[60px] md:w-[90px] lg:left-[54%] lg:top-[120%] lg:h-[5.25rem] lg:w-[7.75rem] xl:left-[42%] xl:top-[162%] xl:h-[5.9463rem] xl:w-[11.2275rem]"
          alt="menu"
        />
        <img
          src="/assets/images/home_page/menu_stickers/explore-new.svg"
          className="absolute right-[0%] top-[-23%] h-[28.12px] w-[53.14px] sm:left-[180px] sm:top-[106%] sm:h-[30px] sm:w-[70px] md:left-[68%] md:top-[126%] md:h-[40px] md:w-[80px] lg:left-[74%] lg:top-[145%] lg:h-[50px] lg:w-[100px] xl:left-[72%] xl:top-[192%] xl:h-[3.9975rem] xl:w-[7.5531rem]"
          alt="explore"
        />
      </div>
      <div className="mt-2 flex justify-center gap-x-4 sm:hidden">
        <div className=" flex h-[50px] w-[140px] items-center rounded-full border border-black  text-[.875rem] font-medium leading-4 text-black">
          <Image
            className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
            src={DarkPlayStore}
            alt="Play store"
          />
          <p className="mx-[10px]">Get it on Play store</p>
        </div>
        <div className="flex h-[50px] w-[140px] items-center rounded-full border border-black  text-[.875rem] font-medium leading-4 text-black">
          <Image
            src={DarkAppStore}
            className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
            alt="App store"
          />
          <p className="mx-[10px]">Available on App store</p>
        </div>
      </div>
    </>
  );
};

export default RightSection;
