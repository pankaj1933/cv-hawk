import React from "react";
import tools from "../assets/images/webp/standout.webp";

const PowerfulTools = () => {
  return (
    <div className="bg_light mt-[160px]">
      <div className="container_custom py-[160px]">
        <div className="grid lg:grid-cols-2 flex items-center gap-24">
          <div  data-aos="fade-right"data-aos-duration="1000">
            <h3 className="ff_rubik sm:text-[30px] lg:text-[40px] font-medium max-w-[550px]">
              Powerful Tools to Create
              <span className="text-[#F36A3E] builder1 ">Your Standout CV</span>
            </h3>
            <p className="ff_rubik text-[16px] opacity-[.7] font-normal pt-[10px]">
              Customize your CV to reflect your
              <span className="font-semibold">unique personality</span> and
              professional brand. Choose from a wide range of
              <span className="font-semibold">professionally designed</span>
              templates and layouts, allowing you to find the
              <span className="font-semibold">perfect style</span> that aligns
              with your industry and career goals.
            </p>
          </div>
          <div className="order-first lg:order-last"  data-aos="fade-left"data-aos-duration="1000">
            <img className="w-full" src={tools} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerfulTools;
