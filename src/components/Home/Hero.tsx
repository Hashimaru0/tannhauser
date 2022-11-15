import marsVid from "../../videos/mars_walk.mp4";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <video
        src={marsVid}
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="flex justify-center lg:justify-end items-center lg:px-[15rem] w-full h-screen">
        <div className="flex flex-col justify-center align-center max-w-[20rem] text-white z-30">
          <div className="text-3xl opacity-70">New Frontier Opens</div>
          <div className="text-5xl">Venus</div>
          <div className="opacity-70 mt-2">$189,000 return ticket*</div>
          <div className="leading-[1.2rem] mt-2">
            Experience a new world using our state of the art transit ship
            L.O.T.U.S. where all your needs will be taken care of and your safe
            journey assured
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
