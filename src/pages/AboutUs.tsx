import Footer from "../components/Footer";
import { motion } from "framer-motion";
import RocketLaunchIMG from "../imgs/rocket_launch.jpg";
import BlackSkyIMG from "../imgs/partners/blacksky-logo.png";
import CanonIMG from "../imgs/partners/canon-logo.png";
import CapellaSpaceIMG from "../imgs/partners/capella-space-logo.png";
import DarpaIMG from "../imgs/partners/darpa-logo.png";
import NasaIMG from "../imgs/partners/nasa-logo-web-rgb.png";
import NroIMG from "../imgs/partners/nro-logo.png";
import SpaceForceIMG from "../imgs/partners/space-force-logo.png";
import SpaceflightIMG from "../imgs/partners/spaceflight-logo.png";
import Tyvak from "../imgs/partners/tyvak-logo.png";
import StationIMG from "../imgs/station.jpg";
import { useEffect } from "react";

const MissionCounter = ({ num, desc }: { num: number; desc: string }) => {
  return (
    <div className="flex flex-col my-6 lg:my-0">
      <div
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        className="text-[3.5rem] text-center"
      >
        {num}
      </div>
      <div className="text-base text-center max-w-[10rem] opacity-70">
        {desc}
      </div>
    </div>
  );
};

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="text-white"
    >
      <div className="relative flex justify-center items-center min-h-screen overflow-hidden">
        <img
          src={RocketLaunchIMG}
          className="absolute w-full h-full object-cover opacity-90 select-none"
          alt="Rocket Launch"
        />
        <div className="relative text-[4rem] text-center tracking-widest">
          ABOUT US
        </div>
      </div>
      <div className=" border-y border-white/70">
        <div className="flex justify-center items-center text-sm sm:text-xl lg:text-3xl text-center max-w-[65rem] px-8 py-[5rem] lg:py-[10rem] mx-auto">
          TANNHÄUSER IS AN END-TO-END SPACE TRANSIT COMPANY DELIVERING RELIABLE
          LAUNCH SERVICES, SPACECRAFT, SATELLITE COMPONENTS, AND ON-ORBIT
          MANAGEMENT.
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center text-center max-w-[65rem] px-8 py-[3rem] lg:py-[10rem] mx-auto">
          <div className="text-xl lg:text-4xl tracking-widest">
            OUR PARTNERS
          </div>
          <div className="text-sm lg:text-lg max-w-[30rem] mt-5 lg:mt-10 opacity-70">
            More than 150 successful missions completed with our partners across
            commercial, civil, defense and academic sectors.
          </div>
          <div className="flex justify-center flex-wrap max-w-[40rem] mt-10 lg:mt-20">
            <div>
              <img src={NasaIMG} width={200} alt="NASA" />
            </div>
            <div>
              <img src={SpaceForceIMG} width={200} alt="Space Force" />
            </div>
            <div>
              <img src={CapellaSpaceIMG} width={200} alt="Capella Space" />
            </div>
            <div>
              <img src={DarpaIMG} width={200} alt="Darpa" />
            </div>
            <div>
              <img src={BlackSkyIMG} width={200} alt="Black Sky" />
            </div>
            <div>
              <img src={NroIMG} width={200} alt="NRO" />
            </div>
            <div>
              <img src={CanonIMG} width={200} alt="Canon" />
            </div>
            <div>
              <img src={SpaceflightIMG} width={200} alt="Spaceflight" />
            </div>
            <div>
              <img src={Tyvak} width={200} alt="Tyvak" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-y border-white/70">
        <div className="flex flex-col lg:flex-row justify-between items-center py-[5rem] lg:py-[8rem] max-w-[60rem] px-8 mx-auto">
          <MissionCounter num={1257} desc="LAUNCHES" />
          <MissionCounter num={317} desc="SATELLITES DEPLOYED" />
          <MissionCounter num={7} desc="LAUNCH PADS" />
          <MissionCounter num={3} desc="ORBITAL GATES OPERATIONAL" />
        </div>
      </div>
      <div className="border-b border-white/70">
        <img
          src={StationIMG}
          className="w-full h-full object-cover"
          alt="Station"
        />
      </div>
      <Footer />
    </motion.div>
  );
};

export default AboutUs;
