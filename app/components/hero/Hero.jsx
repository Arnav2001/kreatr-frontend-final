"use client";

import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";

const Hero = () => {
  
  return (
    <section>
      <div className="container mx-auto ">
        <div className=" grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:py-24 sm:py-12 md:py-12 ml-3 py-14">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
