
import React from "react";
import Image from "next/image";
import KreatrLogo from '../../../public/assets/images/home_page/logo/Kreatr-logo.svg'


const Header = () => {
  return (
    <>
      <header className="">
        <div className="flex items-center justify-center border-b border-gray-500 p-2">
          <Image className="my-3 xl:h-32.79 xl:w-181 lg:w-[10rem] lg:h-[1.6875rem] w-124 h-22"  src={KreatrLogo} alt="Kreatr Logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
