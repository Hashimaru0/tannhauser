import { useState, useEffect } from "react";
import DropArrow from "./Header/DropArrow";
import MenuIcon from "./Header/MenuIcon";
import { Link, useLocation } from "react-router-dom";
import DestDropdown from "./Header/DestDropdown";
import { motion, AnimatePresence } from "framer-motion";
import ShipsDropdown from "./Header/ShipsDropdown";
import SideNavbar from "./Header/SideNavbar";

const Header = () => {
  const location = useLocation();
  const [destDropdown, setDestdropdown] = useState<boolean>(false);
  const [shipsDropdown, setShipsDropdown] = useState<boolean>(false);
  const [sideNavbar, setSideNavbar] = useState<boolean>(false);

  const [show, setShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<Number>(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex justify-between fixed text-white w-full h-[6rem] px-5 sm:px-20 z-40"
          >
            <div className="flex flex-col pt-5">
              <Link to="/" className="group">
                <div className="text-2xl sm:text-3xl">Tannhäuser</div>
                <div className="text-xl sm:text-2xl mt-[-0.3rem] ml-[0.3rem] text-white opacity-60 group-hover:opacity-80 transition">
                  starlines
                </div>
              </Link>
            </div>
            <div className="pt-7 hidden lg:block">
              <nav>
                <ul className="flex gap-x-5 text-lg">
                  <li>
                    <Link className="relative group" to="/tickets">
                      Tickets
                      <div
                        className={`absolute bottom-0 h-px bg-white group-hover:w-full group-hover:left-0 ${
                          location.pathname === "/tickets"
                            ? "w-full left-0"
                            : "w-0 left-1/2"
                        } transition-all`}
                      ></div>
                    </Link>
                  </li>
                  <li
                    onMouseEnter={() => setDestdropdown(true)}
                    onMouseLeave={() => setDestdropdown(false)}
                    className="flex relative group"
                  >
                    <div className="hover:cursor-pointer">
                      Destinations
                      <div
                        className={
                          "absolute bottom-1 h-px bg-white w-0 left-1/2 group-hover:w-full group-hover:left-0 transition-all"
                        }
                      ></div>
                    </div>
                    <DropArrow
                      style={{ marginTop: "0.7rem", marginLeft: "0.3rem" }}
                    />
                    <AnimatePresence>
                      {destDropdown && <DestDropdown />}
                    </AnimatePresence>
                  </li>
                  <li
                    onMouseEnter={() => setShipsDropdown(true)}
                    onMouseLeave={() => setShipsDropdown(false)}
                    className="flex relative group"
                  >
                    <div className="hover:cursor-pointer">
                      Our Ships
                      <div
                        className={
                          "absolute bottom-1 h-px bg-white w-0 left-1/2 group-hover:w-full group-hover:left-0 transition-all"
                        }
                      ></div>
                    </div>
                    <DropArrow
                      style={{ marginTop: "0.7rem", marginLeft: "0.3rem" }}
                    />
                    <AnimatePresence>
                      {shipsDropdown && <ShipsDropdown />}
                    </AnimatePresence>
                  </li>
                  <li>
                    <Link className="relative group" to="/about_us">
                      About Us
                      <div
                        className={`absolute bottom-0 h-px bg-white group-hover:w-full group-hover:left-0 ${
                          location.pathname === "/about_us"
                            ? "w-full left-0"
                            : "w-0 left-1/2"
                        } transition-all`}
                      ></div>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex text-md sm:text-lg py-7">
              <div className="hover:cursor-pointer group relative">
                Shop
                <div
                  className={
                    "absolute bottom-4 h-px bg-white w-0 left-1/2 group-hover:w-full group-hover:left-0 transition-all"
                  }
                ></div>
              </div>
              <button
                className="mt-[-0.7rem] sm:mt-[-0.4rem] ml-[0.7rem] sm:ml-[1.1rem]"
                onClick={() => setSideNavbar(true)}
              >
                <MenuIcon />
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {sideNavbar && <SideNavbar setSideNavbar={setSideNavbar} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
