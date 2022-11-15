import Footer from "../components/Footer";
import { motion } from "framer-motion";
import SpaceBackgroundIMG from "../imgs/space_back.png";
import PriceCard from "../components/Tickets/PriceCard";
import { useEffect } from "react";

const Tickets = () => {
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
      <div className="relative flex justify-center items-center min-h-screen overflow-hidden border-b border-white/70">
        <img
          src={SpaceBackgroundIMG}
          className="absolute w-full h-full object-cover opacity-50 zoom-background"
          alt="Galaxy"
        />
        <div className="my-[8rem] xl:my-[0rem]">
          <div className="relative flex justify-center items-center gap-10 flex-wrap max-w-[17rem] sm:max-w-[36.5rem] xl:max-w-[80rem]">
            <PriceCard
              seatClass="Economy"
              desc="Standard Economy Class offers the best value for money and includes benefits such as complimentary meals and beverages"
              price={79}
              benefits={[
                "2 meals a day",
                "Standard sleeping pod",
                "Free internet usage",
              ]}
            />
            <PriceCard
              seatClass="Business"
              desc="Less luxurious than first class but superior to economy class, intended for business passengers"
              price={119}
              benefits={[
                "3 meals a day",
                "Private room",
                "Free internet usage",
                "Lounge access",
              ]}
            />
            <PriceCard
              seatClass="First Class"
              desc="Luxury seating that has more comfort and service than other seats, with amenities ranging from private suites to access to on-board showers"
              price={399}
              benefits={[
                "Business amenities",
                "Private apartment",
                "Personal staff",
                "Service prioritization",
              ]}
            />
            <PriceCard
              seatClass="Premium"
              desc="Best choice for getting the most enjoyment out of your journey across the solar system"
              price={759}
              benefits={[
                "First class amenities",
                "Premium club access",
                "Designated ship section",
              ]}
            />
          </div>
          <div className="relative text-sm text-white/70 mt-2">
            *US$ thousand
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default Tickets;
