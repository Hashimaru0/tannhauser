import { motion } from "framer-motion";

const ShipsDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute flex w-[10rem] border border-white/20 shadow-md rounded top-full bg-white bg-opacity-5 backdrop-blur"
    >
      <div>
        <ul className="text-base flex flex-col ml-5 mt-3 gap-2 last:mb-4">
          <li className="hover:underline hover:cursor-pointer">L.O.T.U.S.</li>
          <li className="hover:underline hover:cursor-pointer">Horizon</li>
          <li className="hover:underline hover:cursor-pointer">
            Nebuchadnezzar
          </li>
          <li className="hover:underline hover:cursor-pointer">Starliner</li>
          <li className="hover:underline hover:cursor-pointer">Falcon 0</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ShipsDropdown;
