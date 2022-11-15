import europaIMG from "../../imgs/europa.png";
import { Parallax } from "react-parallax";
import { InView } from "react-intersection-observer";

const UpcomingLaunch = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <Parallax
        className="w-full"
        bgImage={europaIMG}
        bgImageStyle={{ opacity: "50%", marginTop: "3rem", objectFit: "cover" }}
        strength={200}
      >
        <div className="my-[6rem] w-full max-w-[65rem] px-8 lg:px-5 mx-auto text-white">
          <InView rootMargin="250px 0px 0px 0px" threshold={1}>
            {({ inView, ref, entry }) => (
              <div
                ref={ref}
                className={`max-w-[26rem] mx-auto lg:mx-0 ${
                  inView ? "opacity-100" : "opacity-0"
                } transition`}
              >
                <div className="text-2xl opacity-60">Upcoming Launch:</div>
                <div className="text-3xl">Europa</div>
                <div className="mt-2">
                  Europa is the smallest of the four Galilean moons orbiting
                  Jupiter, and the sixth-closest to the planet of all the 80
                  known moons of Jupiter. It is also the sixth-largest moon in
                  the Solar System. Europa was named after Europa, the
                  Phoenician mother of King Minos of Crete and lover of Zeus.
                </div>
              </div>
            )}
          </InView>
          <InView rootMargin="250px 0px 0px 0px" threshold={1}>
            {({ inView, ref, entry }) => (
              <div
                ref={ref}
                className={`max-w-[26rem] mx-auto lg:ml-auto lg:mr-0 mt-[4rem] ${
                  inView ? "opacity-100" : "opacity-0"
                } transition`}
              >
                <div className="text-3xl">Sights to see</div>
                <div className="mt-2">
                  Slightly smaller than Earth's Moon, Europa is primarily made
                  of silicate rock and has a water-ice crust and probably an
                  iron–nickel core. It has a very thin atmosphere, composed
                  primarily of oxygen. Its white-beige surface is striated by
                  light tan cracks and streaks, but craters are relatively few.
                </div>
              </div>
            )}
          </InView>
          <InView rootMargin="250px 0px 0px 0px" threshold={1}>
            {({ inView, ref, entry }) => (
              <div
                ref={ref}
                className={`max-w-[26rem] mx-auto lg:mx-0 mt-[4rem] ${
                  inView ? "opacity-100" : "opacity-0"
                } transition`}
              >
                <div className="text-3xl">Adventure awaits</div>
                <div className="mt-2">
                  Europa has the smoothest surface of any known solid object in
                  the Solar System. The apparent youth and smoothness of the
                  surface have led to the hypothesis that a water ocean exists
                  beneath the surface, which could conceivably harbor
                  extraterrestrial life.
                </div>
              </div>
            )}
          </InView>
        </div>
      </Parallax>
    </div>
  );
};

export default UpcomingLaunch;
