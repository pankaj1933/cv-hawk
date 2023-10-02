import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function CvAccordian() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <section>
            {/* <div className='blur-[132px]  bg-[#FDDA60] w-[132px] h-[132px]  absolute top-[45%]  start-[50%]'></div> */}
            <div className="container_custom mx-auto mb-[455px] md:mb-[290px]">
                <h2 className="text-black font-medium text-[28px] md:text-[30px] lg:text-[40px]  ff_rubik leading-none text-center md:pt-[70px] pb-[20px] md:pb-[60px] ">Frequently Asked Questions</h2>
                <div className=" flex justify-center relative z-20 ">
                    <div className="w-full lg:w-10/12 text-[#010101] ">
                        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}  data-aos="fade-right"data-aos-duration="1000">
                            <AccordionHeader className="py-[24px] ff_rubik md:text-[20px] text-[16px]  lg:text-[24px]  font-normal text-start  xs:max-w-none  " onClick={() => handleOpen(1)}>Q1. How does the CVhawk work??</AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base opacity-[.8] ff_rubik">
                                Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-black opacity-[0.1] ' ></div>
                        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}  data-aos="fade-left"data-aos-duration="1000">
                            <AccordionHeader className="py-[24px] ff_rubik md:text-[20px] text-[16px] lg:text-[24px]  font-normal text-start  xs:max-w-none  " onClick={() => handleOpen(2)}>
                                Q2. Is the CVhawk completely free to use?
                            </AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base opacity-[.8] ff_rubik">
                                Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-black opacity-[0.1] ' ></div>
                        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}  data-aos="fade-right"data-aos-duration="1000">
                            <AccordionHeader className="py-[24px] ff_rubik md:text-[20px] text-[16px] lg:text-[24px]  font-normal text-start  xs:max-w-none  " onClick={() => handleOpen(3)}>
                                Q3. Can I edit my CV after I've saved it?
                            </AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base opacity-[.8] ff_rubik">
                                Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-black opacity-[0.1] ' ></div>
                        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}  data-aos="fade-left"data-aos-duration="1000">
                            <AccordionHeader className="py-[24px] ff_rubik md:text-[20px] text-[16px] lg:text-[24px]  font-normal text-start  xs:max-w-none  " onClick={() => handleOpen(4)}>Q4. Can I import my existing CV into the builder?</AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base opacity-[.8] ff_rubik">
                                Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-black opacity-[0.1] ' ></div>
                        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}  data-aos="fade-right"data-aos-duration="1000">
                            <AccordionHeader className="py-[24px] ff_rubik md:text-[20px] text-[16px] lg:text-[24px]  font-normal text-start  xs:max-w-none  " onClick={() => handleOpen(5)}>
                                Q5. Is my personal information safe and secure?
                            </AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base opacity-[.8] ff_rubik">
                                Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-black opacity-[0.1] ' ></div>
                        <Accordion open={open === 6} icon={<Icon id={6} open={open} />}  data-aos="fade-left"data-aos-duration="1000">
                            <AccordionHeader className="py-[24px] ff_rubik md:text-[20px] text-[16px] lg:text-[24px]  font-normal text-start  xs:max-w-none  " onClick={() => handleOpen(6)}>
                                Q6. What kind of templates are available in the CV builder?
                            </AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base opacity-[.8] ff_rubik">
                                Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-black opacity-[0.1] ' ></div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};
export default CvAccordian