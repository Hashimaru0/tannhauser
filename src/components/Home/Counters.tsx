import { useState, useEffect } from "react";

const CounterWithText = ({
  num,
  description,
}: {
  num: number;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        className="flex justify-center w-full"
      >
        {[...num.toString()].map((num, i) => (
          <div
            key={i}
            className="relative flex justify-center items-center text-[2.4rem] border-white border w-10 h-16 mx-1 overflow-hidden rounded"
          >
            <div
              style={{ top: `calc((${num} * -3.6rem) + 0.2rem)` }}
              className="absolute flex flex-col transition-all duration-500"
            >
              {Array.from(Array(10).keys()).map((digit, i) => (
                <div key={i} className="text-center">
                  {digit}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="opacity-70 max-w-[7rem] mt-4 text-center">
        {description}
      </div>
    </div>
  );
};

const Counters = () => {
  const [tripsCount, setTripsCount] = useState<number>(492);
  const [passengersCount, setPassengersCount] = useState<number>(281733);
  const [shipsCount, setShipsCount] = useState<number>(27);

  useEffect(() => {
    const tripsInterval = setInterval(
      () => setTripsCount((prev) => prev + 1),
      3500
    );
    const passengersInterval = setInterval(
      () =>
        setPassengersCount((prev) => prev + Math.floor(Math.random() * 250)),
      3500
    );
    const shipsInterval = setInterval(
      () => setShipsCount((prev) => prev + 1),
      11000
    );
    return () => {
      clearInterval(tripsInterval);
      clearInterval(passengersInterval);
      clearInterval(shipsInterval);
    };
  }, []);
  return (
    <div className="border-y border-white/70 w-full text-white">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-0 my-20 lg:my-40 max-w-[70rem] mx-auto">
        <CounterWithText
          num={tripsCount}
          description="SUCCESSFUL TRIPS COMPLETED"
        />
        <CounterWithText
          num={passengersCount}
          description="SATISFIED PASSANGERS"
        />
        <CounterWithText num={shipsCount} description="SHIPS PRODUCED" />
      </div>
    </div>
  );
};

export default Counters;
