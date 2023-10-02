import React from "react";
import { Link } from "react-router-dom";
import orangecircle from "../assets/images/svg/orangecircle.svg";
import eraser from "../assets/images/svg/eraser.svg";
import goli from "../assets/images/svg/goli.svg";
import smile from "../assets/images/svg/smile.svg";
import narutol1 from "../assets/images/svg/narutol1.svg";
import narutol2 from "../assets/images/svg/narutol2.svg";
import narutor1 from "../assets/images/svg/narutor1.svg";
import narutor2 from "../assets/images/svg/narutor2.svg";
import linear from "../assets/images/svg/linear.svg";

const CvHero = () => {
  return (
    <div>
      <section className="relative">
        <img
          className="absolute top-[-20%] left-[32%]"
          src={orangecircle}
          alt=""
        />
        <img className="absolute hidden top-[68%] left-[0%]" src={eraser} alt="" />
        <img className="absolute top-[50%] right-[2%]" src={smile} alt="" />
        <img className="absolute top-[110%] left-[50%]" src={goli} alt="" />
        <img
          className="absolute lg:block hidden top-[-66%] w-[25%] lg:block hidden left-[0%]"
          src={narutol1}
          alt=""
        />
        <img
          className="absolute  lg:block hidden top-[50%] left-[0%] w-[25%]"
          src={narutol2}
          alt=""
        />
        <img
          className="absolute  lg:block hidden top-[-66%] w-[25%] right-[0%]"
          src={narutor1}
          alt=""
        />
        <img
          className="absolute  lg:block hidden top-[50%] right-[0%] w-[25%]"
          src={narutor2}
          alt=""
        />
        <img className="absolute top-[-50%] right-[20%]" src={linear} alt="" />
        <div className="container_custom" data-aos="fade-up-right"data-aos-delay="2500" data-aos-duration="1000">
          <h1 className="ff_rubik text-[52px] font-semibold mx-auto max-w-[766px] text-center mt-[100px] lg:mt-[200px]">
            Unlock Your Potential with a Professional
            <span className="builder pl-[10px]">CV Builder</span>
          </h1>
          <p className="ff_rubik pt-[14px] text-[16px] font-normal mx-auto max-w-[565px] text-center opacity-[.7]">
            Our user-friendly platform guides you through the process, allowing
            you to customize every section to align with your unique career
            goals.
          </p>
          <div className="flex gap-4 mt-[20px] items-center justify-center">
            <Link className="primarybtn">Get Started</Link>
            <Link className="secondarybtn">Watch Demo</Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container_custom">

        </div>
      </section>
    </div>
  );
};

export default CvHero;
