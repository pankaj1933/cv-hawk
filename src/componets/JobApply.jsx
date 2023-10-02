import React from "react";
import job from "../assets/images/webp/createcv.webp";
import good from '../assets/images/svg/goodtick.svg'

const JobApply = () => {
  return (
    <div>
      <div className="container_custom">
        <div className="grid lg:grid-cols-2 flex items-center">
          <div  data-aos="fade-right"data-aos-duration="1000">
            <img className="w-full" src={job} alt="" />
          </div>
         <div  data-aos="fade-left"data-aos-duration="1000">
         <h4 className="ff_rubik sm:text-[30px] lg:text-[40px] font-medium">
            Resume trailoring based on the
            <span className="text-[#F36A3E] builder1">job you’re applying</span> for
          </h4>
          <p className="ff_rubik text-[16px] pt-[10px] font-normal opacity-[.8]">
            Quickly ensure that your resume covers key skills and experience by
            pasting the job ad you’re applying for
          </p>
          <div className="flex items-center pt-[24px] ">
                        <img src={good} alt="" />
                        <p className='ff_rubik text-[16px] font-normal pl-[12px] opacity-[.8]'>Skills and experience analysis</p>
                    </div>
          <div className="flex items-center pt-[24px]">
                        <img src={good} alt="" />
                        <p className='ff_rubik text-[16px] font-normal pl-[12px] opacity-[.8]'>Actionable Checklist of what else to add to your resume</p>
                    </div>
          <div className="flex items-center pt-[24px]">
                        <img src={good} alt="" />
                        <p className='ff_rubik text-[16px] font-normal pl-[12px] opacity-[.8]'>Instant comparison between your resume and the job posting</p>
                    </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
