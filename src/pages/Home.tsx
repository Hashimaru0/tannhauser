import Hero from "../components/Home/Hero";
import Counters from "../components/Home/Counters";
import UpcomingLaunch from "../components/Home/UpcomingLaunch";
import VoteDestination from "../components/Home/VoteDestination";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Hero />
      <Counters />
      <UpcomingLaunch />
      <VoteDestination />
      <Footer />
    </motion.div>
  );
};

export default Home;
