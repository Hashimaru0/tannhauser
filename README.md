# Tannhäuser
#### Business / Framer Motion / Component Lifecycle Animations
Starline transport company.
Live demo: https://tannhauser.netlify.app/
## How It Works

### Page Transition Animations
Framer Motion has AnimatePresence component with which changing routes can be animated.
```
<AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/about_us" element={<AboutUs />} />
    </Routes>
</AnimatePresence>
```
### Lifecycle Animations
Using Framer Motion's motion component, unmounting and mounting components can be animated since react doesn't support animating lifecycle changes by default.
```
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
```
### Parallax and Intersection Observer
Using react-parallax and react-intersaction-observer libraries to animate parallax effect for background image and give smooth animations for text after the user scrolls down to reveal it.
```
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
```
### Slider
Importing Slider from react-slick for seamsless slider which has infinite scrolling.
 ```
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
 ```
