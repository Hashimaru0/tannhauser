import Header from "./components/Header";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import AboutUs from "./pages/AboutUs";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/about_us" element={<AboutUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
