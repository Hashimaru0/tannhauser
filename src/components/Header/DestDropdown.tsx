import { motion } from "framer-motion";

const DestDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute flex justify-around w-[14rem] border border-white/20 shadow-md rounded top-full bg-white bg-opacity-5 backdrop-blur"
    >
      <div>
        <div className="mt-3 mb-2 text-lg">Planets</div>
        <ul className="text-base flex flex-col gap-2 last:mb-4">
          <li className="hover:underline hover:cursor-pointer">Venus</li>
          <li className="hover:underline hover:cursor-pointer">Mars</li>
          <li className="hover:underline hover:cursor-pointer">Jupiter</li>
          <li className="hover:underline hover:cursor-pointer">Saturn</li>
          <li className="hover:underline hover:cursor-pointer">Uranus</li>
        </ul>
      </div>
      <div>
        <div className="mt-3 mb-2 text-lg">Moons</div>
        <ul className="text-base flex flex-col gap-2 last:mb-4">
          <li className="hover:underline hover:cursor-pointer">Ganymede</li>
          <li className="hover:underline hover:cursor-pointer">Moon</li>
          <li className="hover:underline hover:cursor-pointer">Io</li>
          <li className="hover:underline hover:cursor-pointer">Titan</li>
          <li className="hover:underline hover:cursor-pointer">Europa</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default DestDropdown;
