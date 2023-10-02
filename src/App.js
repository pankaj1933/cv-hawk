import React, { useEffect } from "react";
import "./App.css";
import CvNavbar from "./common/CvNavbar";
import CvHero from "./componets/CvHero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PowerfulTools from "./componets/PowerfulTools";
import WeHelp from "./componets/WeHelp";
import ProfessionDesign from "./componets/ProfessionDesign";
import JobApply from "./componets/JobApply";
import CvFooter from "./common/CvFooter";
import CvAccordian from "./componets/CvAccordian";
import ReviewSec from "./componets/ReviewSec";
import Theme2 from "./componets/Theme2";
import PreLoader from "./common/PreLoader";
import BackToTop from "./common/BackToTop";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <PreLoader />
      <BackToTop />
      <CvNavbar />
      <CvHero />
      <Theme2 />
      <PowerfulTools />
      <WeHelp />
      <ProfessionDesign />
      <JobApply />
      <ReviewSec />
      <CvAccordian />
      <CvFooter />
    </div>
  );
}

export default App;
