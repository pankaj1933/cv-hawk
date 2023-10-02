import React from 'react'
import good from '../assets/images/svg/goodtick.svg'
import right from '../assets/images/webp/stackcard.webp'
import { Link } from 'react-router-dom'

const ProfessionDesign = () => {
  return (
    <div className='bg-[#F9F9F9]'>
        <div className="container_custom mt-[120px]">
            <div className="grid lg:grid-cols-2 flex justify-center items-center">
                <div className="py-[120px]"  data-aos="fade-right"data-aos-duration="1000">
                    <h4 className="ff_rubik text-[40px] font-medium max-w-[600px]">20+ <span className='text-[#F36A3E]'>Professionally designed</span> resume sections</h4>
                    <p className='ff_rubik text-[16px] font-normal max-w-[570px] opacity-[.8]'>Express your professional history without limitations or worry about how your resume looks</p>
                    <div className="flex items-center pt-[24px]">
                        <img src={good} alt="" />
                        <p className='ff_rubik text-[16px] font-normal pl-[12px] opacity-[.8]'>Professional sections like <span className='font-semibold'>Experience, Skills, Summary</span> and <span className='font-semibold'>Education</span></p>
                    </div>
                    <div className="flex items-center pt-[24px]">
                        <img src={good} alt="" />
                        <p className='ff_rubik text-[16px] font-normal pl-[12px] opacity-[.8]'>Professional sections like <span className='font-semibold'>Strengths, Quotes, Books, Interests </span> and <span className='font-semibold'>My Time.</span></p>
                    </div>
                    <div className="flex items-center pt-[24px]">
                        <img src={good} alt="" />
                        <p className='ff_rubik text-[16px] font-normal pl-[12px] max-w-[600px] opacity-[.8]'>Other sections like <span className='font-semibold'>Certifications, Awards, Achievements, Language</span> and <span className='font-semibold'>Reference</span></p>

                    </div>
                    <div className="mt-[40px]">
                        <Link className='primarybtn'>Get Started</Link>
                    </div>
                </div>
                <div className="order-first lg:order-last"  data-aos="fade-left"data-aos-duration="1000">
                    <img className='w-full' src={right} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfessionDesign