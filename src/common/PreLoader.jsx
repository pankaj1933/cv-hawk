import React, { useEffect, useState } from "react";
import Preloader_img from '../assets/gif/preload.gif'
function PreLoader() {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3000);
  }, []);
  {
    if (loder === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
  return (
    <>
      {loder ? (
        <section
          style={{ zIndex: "999999999" }}
          className="bg-white top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
        >
          <div className="flex justify-center">
            <div className=" relative flex justify-center items-center">
              <img className="w-full Preloader_img mx-auto " src={Preloader_img} alt="" />
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default PreLoader;