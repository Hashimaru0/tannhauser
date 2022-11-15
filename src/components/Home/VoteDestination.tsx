import Callisto from "../../imgs/callisto.png";
import Enceladus from "../../imgs/enceladus.png";
import Ganymede from "../../imgs/ganymede.png";
import Io from "../../imgs/io.png";
import Mars from "../../imgs/mars.png";
import Neptune from "../../imgs/neptune.png";
import Pluto from "../../imgs/pluto.png";
import Titan from "../../imgs/titan.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const DestinationCard = ({
  dest,
  destName,
}: {
  dest: string;
  destName: string;
}) => {
  const [voted, setVoted] = useState<boolean>(false);

  return (
    <div className="relative h-[200px] group">
      <img
        width={200}
        src={dest}
        className="absolute opacity-60"
        draggable="false"
        alt={destName}
      />
      <div className="absolute right-[3rem] bottom-[1.8rem] group-hover:bottom-[2.8rem] text-2xl transition-all">
        {destName}
      </div>
      <div className="absolute right-[3rem] bottom-[0.6rem] h-[0rem] group-hover:h-[2rem] overflow-hidden transition-all">
        <button
          onClick={() => setVoted(true)}
          className="opacity-80 hover:bg-white/10 px-1 rounded transition"
        >
          {voted ? "Voted" : "Vote"}
        </button>
      </div>
    </div>
  );
};

const VoteDestination = () => {
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="h-[40rem] border-y border-white/70 text-white">
      <div className="max-w-[65rem] mx-auto px-8 lg:px-5">
        <div className="mt-[5rem] text-3xl">
          Vote on the next destination
          <br />
          you want to visit:
        </div>
        <div className="w-full h-full mt-16">
          <Slider {...settings} className="">
            <DestinationCard dest={Enceladus} destName={"Enceladus"} />
            <DestinationCard dest={Ganymede} destName={"Ganymede"} />
            <DestinationCard dest={Io} destName={"Io"} />
            <DestinationCard dest={Mars} destName={"Mars"} />
            <DestinationCard dest={Neptune} destName={"Neptune"} />
            <DestinationCard dest={Callisto} destName={"Callisto"} />
            <DestinationCard dest={Pluto} destName={"Pluto"} />
            <DestinationCard dest={Titan} destName={"Titan"} />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VoteDestination;
