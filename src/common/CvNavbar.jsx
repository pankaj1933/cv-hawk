import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import navlogo from '../assets/images/navlogo.png'
import { Link } from 'react-router-dom'


const CvNavbar = () => {
    const [first, setfirst] = useState(true);
    function shownav() {
      setfirst(false);
      document.body.classList.add("overflow-hidden");
    }
    function hidenav() {
      setfirst(true);
      document.body.classList.remove("overflow-hidden");
    }
  return (
    <div >
       <div className='container_custom'>
       <div className="flex justify-between items-center">
            <div className="">
                <img src={navlogo} alt="" />
            </div>
            
            <ul className={
              first
                ? "flex gap-5 nav_bar  items-center "
                : "flex   nav_bar show items-center gap-4 "
            }>
                <li className="ff_rubik font-normal text-[16px] nav_li">Home</li>
                <li className="ff_rubik font-normal text-[16px] nav_li">About</li>
                <li className="ff_rubik font-normal text-[16px] nav_li">We’ll help you</li>
                <li className="ff_rubik font-normal text-[16px] nav_li">Testimonials</li>
            </ul>
            <div className="">
                <Link className="primarybtn">Get in Touch</Link>
            </div>
            <h3
            className="relative z-50 lg:hidden"
            onClick={first ? shownav : hidenav}
          >

            {first ? <RxHamburgerMenu /> : <RxCross1 />}
          </h3>
        </div>
       </div>
    </div>
  )
}

export default CvNavbar