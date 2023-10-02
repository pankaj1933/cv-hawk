import React from "react";
import helpsec from '../assets/images/webp/calender.webp'
import { Link } from "react-router-dom";

const WeHelp = () => {
  return (
    <div>
      <div className="container_custom py-[60px]">
        <div className="grid lg:grid-cols-2 flex items-center">
          <div className="pt-[1px]"  data-aos="fade-right"data-aos-duration="1000">
            <img className="w-full" src={helpsec} alt="" />
          </div>
          <div className="mx-[82px]"  data-aos="fade-left"data-aos-duration="1000">
            <h3 className="ff_rubik text-[30px] lg:text-[40px] font-medium ">We’ll help you</h3>
            <p className="ff_rubik text-[16px] font-normal pt-[10px] opacity-[.8]">
              Once you've booked a session, a confirmation email will be sent to
              the provided email address, containing all the necessary details,
              including the date, time, and instructions for the session.
            </p>
            <div className="mt-[40px]">
              
              <Link className="primarybtn">Book a Call</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeHelp;
