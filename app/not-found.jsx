import React from "react";
import Header from "./components/header/Header";

const NotFound = () => {
  return (
    <>
      <div className="bg-img bg-contain fixed h-[100%] ">
        <Header />
        <div className="container mx-auto sm:mt-[100px] mb-[6.25rem] mt-[8.75rem] lg:mt-[60px]">
          <div className=" mt-[3rem] grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 lg:ml-4">
            <div className="sm:order-1 order-2 mt-[4.125rem] flex flex-col items-center justify-center sm:col-span-1 sm:items-start md:ml-[3.125rem] md:mr-[-4.6875rem] lg:mr-[-2.6875rem] md:mb-[4.75rem] md:mt-[11.75rem]  xl:mt-[25.3125rem] lg:mt-[240px] sm:mt-[196px] sm:ml-[20px] sm:mb-[70px]">
              <h1 className="error-page sm:mr-[-55px] mx-auto flex flex-col sm:block items-center  text-[1.25rem] lg:text-[30px] font-semibold  sm:mx-0 md:leading-5 lg:leading-8 xl:text-[2.5rem] xl:leading-[2.8125rem] sm:leading-5 leading-3">
                Sometimes things go missing<span className="sm:hidden block"><br /></span> and that’s okay :)
              </h1>
              <a
                className="mb-[4.1875rem] mt-[2.1875rem] sm:my-0 md:mt-[1.5625rem] xl:mt-[25px] sm:mt-[25px] "
                href="/"
              >
                <button className="back-home error-page md:h-[3.5rem] md:w-[12.1875rem] h-[2.5rem] w-[9.1875rem] text-[1.125rem] md:text-[20px]  xl:h-[3.46rem] xl:w-[14rem] xl:text-[1.875rem]">
                  Back to home
                </button>
              </a>
            </div>
            <div className="static sm:relative order-1 sm:order-2 sm:col-span-4 sm:mx-0">
              <img
                src="/assets/images/404_page/404.svg "
                className="static sm:absolute mx-auto md:top-[-75px] md:left-[45px]  h-[12.8469rem] w-[20rem] sm:h-[400px] sm:w-[450px] sm:top-[-75px] sm:left-[15px] md:h-[410px] md:w-[500px] xl:left-[5.375rem] xl:top-[-1.25rem] xl:h-[40.3862rem] xl:w-[62.8719rem] lg:h-[400px] lg:w-[800px] lg:top-[-35px] lg:left-[0px]"
                alt="page not found"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
