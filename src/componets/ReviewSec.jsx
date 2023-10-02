import React from "react";
import darrel from "../assets/images/svg/reivew1.svg";
import reivew2 from "../assets/images/svg/reivew2.svg";
import reivew3 from "../assets/images/svg/reivew3.svg";
import reivew4 from "../assets/images/svg/reivew4.svg";
import reivew5 from "../assets/images/svg/reivew5.svg";
import stars from "../assets/images/svg/fivestar.svg";
import triangle from "../assets/images/webp/triangle.webp";
import Slider from "react-slick";
const ReviewSec = () => {
  var settingsone = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settingstwo = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <section>
        <div className="container_custom  py-[80px]" data-aos="zoom-in-down"  data-aos-duration="1500">
          <h5 className="ff_rubik text-[40px] font-medium pb-[60px] flex justify-center">
            What our Clients Say
          </h5>
      <div className="md:block hidden">
      <Slider {...settingsone} className="relative ">
            {/* three reivew line  */}
            <div>
              <div className="flex w-full justify-center">
                {/* 1 */}
                <div className="w-4/12">
                  <div className="review_box mx-[25px] mt-[30px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Sit urna ornare sed quam molestie sit placerat convallis.
                      Ac condimentum mollis malesuada placerat in placerat
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={darrel} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Darrell Steward
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="w-4/12 lg:block hidden">
                  <div className="review_box mx-[25px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Magna ipsum erat magna nulla auctor. Phasellus consectetur
                      aliquam vel at non faucibus viverra.
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={reivew2} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Savannah Nguyen
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="w-4/12">
                  <div className="review_box mx-[25px] mt-[30px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Morbi leo ullamcorper in et viverra. Neque elit
                      scelerisque purus praesent nulla ut a id.
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={reivew3} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Esther Howard
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* SECOND ROW */}
              <div className="flex w-full justify-center mt-[40px]">
                {/* 1 */}
                <div className="w-4/12">
                  <div className="review_box mx-[25px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Urna ac eu cras pellentesque scelerisque et. Vestibulum
                      sed felis leo leo massa elementum sit praesent eu.
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={reivew4} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Jenny Wilson
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="w-4/12">
                  <div className="review_box mx-[25px] mt-[30px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Nibh in commodo faucibus tincidunt. Adipiscing lobortis
                      est elit neque sem scelerisque tellus magna urna.
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={reivew5} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Wade Warren
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd slide */}
            <div>
              <div className="flex w-full justify-center">
                {/* 1 */}
                <div className="w-4/12 lg:block hidden">
                  <div className="review_box mx-[25px] mt-[30px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Sit urna ornare sed quam molestie sit placerat convallis.
                      Ac condimentum mollis malesuada placerat in placerat
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={darrel} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Darrell Steward
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="w-4/12">
                  <div className="review_box mx-[25px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Magna ipsum erat magna nulla auctor. Phasellus consectetur
                      aliquam vel at non faucibus viverra.
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={reivew2} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Savannah Nguyen
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="w-4/12">
                  <div className="review_box mx-[25px] mt-[30px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Morbi leo ullamcorper in et viverra. Neque elit
                      scelerisque purus praesent nulla ut a id.
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={reivew3} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Esther Howard
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* SECOND ROW */}
              <div className="flex w-full justify-center mt-[40px]">
                {/* 1 */}
                <div className="w-4/12">
                  <div className="review_box mx-[25px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Urna ac eu cras pellentesque scelerisque et. Vestibulum
                      sed felis leo leo massa elementum sit praesent eu.
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={reivew4} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Jenny Wilson
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="w-4/12">
                  <div className="review_box mx-[25px] mt-[30px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Nibh in commodo faucibus tincidunt. Adipiscing lobortis
                      est elit neque sem scelerisque tellus magna urna.
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={reivew5} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Wade Warren
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd slide */}
            <div>
              <div className="flex w-full justify-center">
                {/* 1 */}
                <div className="w-4/12">
                  <div className="review_box mx-[25px] mt-[30px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Sit urna ornare sed quam molestie sit placerat convallis.
                      Ac condimentum mollis malesuada placerat in placerat
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={darrel} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Darrell Steward
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="w-4/12">
                  <div className="review_box mx-[25px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Magna ipsum erat magna nulla auctor. Phasellus consectetur
                      aliquam vel at non faucibus viverra.
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={reivew2} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Savannah Nguyen
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="w-4/12 lg:block hidden">
                  <div className="review_box mx-[25px] mt-[30px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Morbi leo ullamcorper in et viverra. Neque elit
                      scelerisque purus praesent nulla ut a id.
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={reivew3} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Esther Howard
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* SECOND ROW */}
              <div className="flex w-full justify-center mt-[40px]">
                {/* 1 */}
                <div className="w-4/12">
                  <div className="review_box mx-[25px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Urna ac eu cras pellentesque scelerisque et. Vestibulum
                      sed felis leo leo massa elementum sit praesent eu.
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={reivew4} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Jenny Wilson
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="w-4/12">
                  <div className="review_box mx-[25px] mt-[30px] relative">
                    <img className="absolute top-[97%]" src={triangle} alt="" />
                    <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                      Nibh in commodo faucibus tincidunt. Adipiscing lobortis
                      est elit neque sem scelerisque tellus magna urna.
                    </p>
                  </div>
                  <div className="flex ml-[40px] pt-[43px] gap-4">
                    <img src={reivew5} alt="" />
                    <div className="">
                      <p className="ff_rubik text-[20px] font-normal">
                        Wade Warren
                      </p>
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
      </div>
       <div className="md:hidden block">
       <Slider {...settingstwo}>
            <div >
              <div className="review_box mx-[25px] mt-[30px] relative">
                <img className="absolute top-[97%]" src={triangle} alt="" />
                <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                  Sit urna ornare sed quam molestie sit placerat convallis. Ac
                  condimentum mollis malesuada placerat in placerat
                </p>
              </div>
              <div className="flex ml-[40px] pt-[43px] gap-4">
                <img src={darrel} alt="" />
                <div className="">
                  <p className="ff_rubik text-[20px] font-normal">
                    Darrell Steward
                  </p>
                  <img src={stars} alt="" />
                </div>
              </div>
            </div>

            {/* 2 */}
            <div>
              <div className="review_box mx-[25px] relative">
                <img className="absolute top-[97%]" src={triangle} alt="" />
                <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                  Magna ipsum erat magna nulla auctor. Phasellus consectetur
                  aliquam vel at non faucibus viverra.
                </p>
              </div>
              <div className="flex ml-[40px] pt-[43px] gap-4">
                <img src={reivew2} alt="" />
                <div className="">
                  <p className="ff_rubik text-[20px] font-normal">
                    Savannah Nguyen
                  </p>
                  <img src={stars} alt="" />
                </div>
              </div>
            </div>
            {/* 3 */}

            <div>
              <div className="review_box mx-[25px] mt-[30px] relative">
                <img className="absolute top-[97%]" src={triangle} alt="" />
                <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                  Morbi leo ullamcorper in et viverra. Neque elit scelerisque
                  purus praesent nulla ut a id.
                </p>
              </div>
              <div className="flex ml-[40px] pt-[43px] gap-4">
                <img src={reivew3} alt="" />
                <div className="">
                  <p className="ff_rubik text-[20px] font-normal">
                    Esther Howard
                  </p>
                  <img src={stars} alt="" />
                </div>
              </div>
            </div>
            {/* SECOND ROW */}

           <div>
           <div className="review_box mx-[25px] relative">
              <img className="absolute top-[97%]" src={triangle} alt="" />
              <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                Urna ac eu cras pellentesque scelerisque et. Vestibulum sed
                felis leo leo massa elementum sit praesent eu.
              </p>
            </div>
            <div className="flex ml-[40px] pt-[43px] gap-4">
              <img src={reivew4} alt="" />
              <div>
                <p className="ff_rubik text-[20px] font-normal">Jenny Wilson</p>
                <img src={stars} alt="" />
              </div>
            </div>
           </div>

           

           <div >
           <div className="review_box mx-[25px] mt-[30px] relative">
              <img className="absolute top-[97%]" src={triangle} alt="" />
              <p className="ff_rubik text-[16px] font-normal opacity-[.8]">
                Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit
                neque sem scelerisque tellus magna urna.
              </p>
            </div>
            <div className="flex ml-[40px] pt-[43px] gap-4">
              <img src={reivew5} alt="" />
              <div className="">
                <p className="ff_rubik text-[20px] font-normal">Wade Warren</p>
                <img src={stars} alt="" />
              </div>
            </div>
           </div>
          </Slider>
       </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewSec;
