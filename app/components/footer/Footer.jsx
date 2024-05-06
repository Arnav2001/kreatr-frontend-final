import React from "react";
import Image from "next/image";
import KreatrLogo from "../../../public/assets/images/home_page/logo/Kreatr-logo.svg";
import Whatsapp from "../../../public/assets/images/home_page/social_media_icons/Twitter.svg";
import Instagram from "../../../public/assets/images/home_page/social_media_icons/Instagram.svg";
import Linkedin from "../../../public/assets/images/home_page/social_media_icons/Linkedin.svg";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-500">
        <div className="container  mx-auto  ">
          <div className=" grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-12 lg:ml-4 ">
            <div>
              <Image
                src={KreatrLogo}
                className="xl:w-[14.375rem] xl:h-[2.5rem] lg:w-[10rem] lg:h-[2rem]  w-[7.875rem] h-[1.375rem]  sm:mx-0 mx-auto"
                alt="Kreatr Logo"
              />
              <div className="sm:flex hidden xl:mt-12 items-center justify-start my-5">
                <a href="#">
                  <Image
                    src={Whatsapp}
                    className="pr-2 xl:w-43.71 xl:h-43.71 lg:w-[2.25rem] lg:h-[2.25rem] md:w-[2.125rem] md:h-[2.125rem]"
                    alt="Whatsapp"
                  />
                </a>
                <a href="#">
                  <Image
                    src={Instagram}
                    className="pr-2 xl:w-43.71 xl:h-43.71 lg:w-[2.25rem] lg:h-[2.25rem] md:w-[2.125rem] md:h-[2.125rem]"
                    alt="Instagram"
                  />
                </a>
                <a href="#">
                  <Image
                    src={Linkedin}
                    className="pr-2 xl:w-43.71 xl:h-43.71 lg:w-[2.25rem] lg:h-[2.25rem] md:w-[2.125rem] md:h-[2.125rem]"
                    alt="Linkedin"
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="flex justify-around items-center sm:flex-row flex-col sm:pt-0 pt-8 sm:border-none border-b border-gray-500 ">
                <ul className="footer-ul flex flex-row sm:flex-col ">
                  <a href="#">
                    <li className="xl:text-24 lg:text-[1.125rem] text-[.875rem] footer-section footer-content pr-10">
                      Blogs
                    </li>
                  </a>
                  <a href="#">
                    <li className="xl:text-24 lg:text-[1.125rem] text-[.875rem] footer-section footer-content pr-10">
                      Become a partner
                    </li>
                  </a>
                  <a href="#">
                    <li className="xl:text-24 lg:text-[1.125rem] text-[.875rem] footer-section footer-content pr-10">
                      Careers
                    </li>
                  </a>
                </ul>
                <ul className="footer-ul flex flex-row sm:flex-col">
                  <a href="#">
                    <li className="xl:text-24 lg:text-[1.125rem] text-[.875rem] footer-content footer-section pr-10">
                      FAQs
                    </li>
                  </a>
                  <a href="#">
                    <li className="xl:text-24 lg:text-[1.125rem] text-[.875rem] footer-content footer-section pr-10">
                      Contact Us
                    </li>
                  </a>
                  <a href="#">
                    <li className="xl:text-24 lg:text-[1.125rem] text-[.875rem] footer-content footer-section pr-10">
                      Legal
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="sm:hidden " >
            <p className="text-center mt-[1.875rem] text-blue-700 text-[1.125rem] footer-findus" >Find us on</p>
            <div className="sm:flex  sm:mt-12 flex items-center sm:justify-start justify-center my-5">
              <a href="#">
                <Image
                  src={Whatsapp}
                  className="pr-2 w-[1.9375rem] h-[1.9375rem]"
                  alt="Whatsapp"
                />
              </a>
              <a href="#">
                <Image
                  src={Instagram}
                  className="pr-2 w-[1.9375rem] h-[1.9375rem]"
                  alt="Instagram"
                />
              </a>
              <a href="#">
                <Image
                  src={Linkedin}
                  className="pr-2 w-[1.9375rem] h-[1.9375rem]"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center py-8 sm:px-0 px-10 text-center">
            <p className="xl:text-20 text-[.875rem] footer-copyright footer-section ">
              Copyright © 2024 KreatrMinds Pvt Ltd.{" "}
              <a href="#" className="text-blue-700">
                Terms and Conditions
              </a>{" "}
              |
              <a href="#" className="text-blue-700">
                {" "}
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
