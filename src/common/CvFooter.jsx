import React from "react";
import logo from "../assets/images/webp/logofooter.webp";
import phone from "../assets/images/svg/phone.svg"
import mail from "../assets/images/svg/mail.svg"
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "./Icon";

const CvFooter = () => {
  return (
    <div className="bg-black">
      <section className="bg_linear" data-aos="zoom-in-up" data-aos-duration="1500">
        <div className="orangebox lg:px-[236px] px-[100px]  py-[64px]">
          <h5 className="ff_rubik text-[40px] font-medium text-white">
            Your Path to Success Starts Here: Build Your CV Today
          </h5>
          <p className="ff_rubik text-[16px] pt-[17px] font-normal text-[16px] opacity-[.9] text-white">
            Our CV builder not only provides a user-friendly interface but also
            offers valuable guidance along the way.
          </p>
          <div className="pt-[40px]">
            <Link className="ff_rubik text-[16px] font-semibold text-[16px] whitebtn">
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container_custom">
          <div className=" flex-col flex lg:flex-row w-full justify-between lg:items-center">
            <div className="w-4/12">
              <img src={logo} alt="" />
              <p className="ff_rubik text-[16px] font-normal text-[16px] opacity-[.9] text-white pb-[33px]">
                Sit urna ornare sed quam molestie sit placerat convallis. Ac
                condimentum mollis malesuada placerat in placerat id facilisis.
              </p>
              <div className="flex gap-6">
              <div className="hover:translate-y-[-5px] cursor-pointer transition-all"><Twitter /></div>  
              <div className="hover:translate-y-[-5px] cursor-pointer transition-all"> <Facebook /></div>  
              <div className="hover:translate-y-[-5px] cursor-pointer transition-all"> <Instagram /></div>  
               
               
              </div>
            </div>
            <div className="w-6/12 flex flex-col sm:flex-row justify-between mt-[70px]">
              <ul>
                <li className="pb-[20px] ff_rubik text-white font-semibold text-[16px]">Quick Links</li>
                <li className="pb-[20px] ff_rubik text-white font-normal text-[16px] hover:text-[#f36a3e] cursor-pointer opacity-[.9]">Home</li>
                <li className="pb-[20px] ff_rubik text-white font-normal text-[16px] opacity-[.9] hover:text-[#f36a3e] cursor-pointer">About</li>
                <li className="pb-[20px] ff_rubik text-white font-normal text-[16px] opacity-[.9] hover:text-[#f36a3e] cursor-pointer">We’ll help you</li>
                <li className="pb-[20px] ff_rubik text-white font-normal text-[16px] opacity-[.9] hover:text-[#f36a3e] cursor-pointer">Testimonials</li>
              </ul>
              <ul>
                <li className="pb-[20px] ff_rubik text-white font-semibold text-[16px]">Support</li>
                <li className="gap-3 flex pb-[20px] ff_rubik text-white font-normal text-[16px] opacity-[.9] hover:text-[#f36a3e] cursor-pointer">
                  <img src={phone} alt="" />
                  <p>+012 345 67890</p>
                </li>
                <li  className="gap-3 flex pb-[20px] ff_rubik text-white font-normal text-[16px] opacity-[.9] hover:text-[#f36a3e] cursor-pointer">
                  <img src={mail} alt="" />
                  <p>Cvhawk@gmail.com</p>
                </li>
              </ul>
              <ul>
                <li className="pb-[20px] ff_rubik text-white font-semibold text-[16px]">Legal</li>
                <li className="pb-[20px] ff_rubik text-white font-normal text-[16px] opacity-[.9] hover:text-[#f36a3e] cursor-pointer">Privacy Policy</li>
                <li className="pb-[20px] ff_rubik text-white font-normal text-[16px] opacity-[.9] hover:text-[#f36a3e] cursor-pointer">Terms & conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copyline opacity-[.9]  cursor-pointer ff_rubik text-white font-normal mt-[70px] flex justify-center text-[16px]">Copyright@CVhawk2023</p>
      </section>
    </div>
  );
};

export default CvFooter;
