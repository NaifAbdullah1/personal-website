/*
- On mobile width, make the nav links a drawer. Or have the website content get pushed down. Or give it a background color.

- You might need this, this can help in making a marquee: https://www.react-fast-marquee.com/


- When you're done, see if you can consolidate your css files

- Investigate ways to simplify the Header.jsx code. Make a backup copy and a commit first

- Determine a minimum width for the site. Do this once you've almost done with implementing the site

- Maybe make the nav links responsive to screen size instead of using css media queries? 

- For the marquee, we're using two different sets of the same images. See if you can use a single set of images and do the resizing via css 

- Work on Dialog animation

- Wasn't able to make a slideshow for mobile. We may resort to either not showing the slideshow on mobile. Or showing it but disabling the hover effect, we'll also need to make it smaller. 

- Consider offloading the styling of the sections onto a different file/s
*/

import { useEffect, useState } from "react";
import Header from "./Components/Header.jsx";
import LoadingScreen from "./Components/LoadingScreen.jsx";
import AnimatedCursor from "react-animated-cursor";
import About from "./Components/Sections/About.jsx";
import Hero from "./Components/Sections/Hero.jsx";
import Experience from "./Components/Sections/Experience.jsx";
import Portfolio from "./Components/Sections/Portfolio.jsx";
import Contact from "./Components/Sections/Contact.jsx";
import "./App.scss";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false); // Signals the completion of the intro
  const [fadeWebsiteContentIn, setFadeWebsiteContentIn] = useState(false); // Signals the beginning of fading in the content of the site

  // Runs after the initial logo intro disappears
  const handleLoadingComplete = () => {
    // This runs after the loading logo fades out
    setLoadingComplete(true);
    // Now, we'll fade in the website's contents 1 sec after the logo is gone
    setTimeout(() => {
      setFadeWebsiteContentIn(true);
    }, 1000);
  };

  // Disabling scrolling when website contents are fading in.
  useEffect(() => {
    // Adding a class to the DOM that disables scrolling upon page load
    document.body.classList.add("disable-scroll");
    // Re-enable scrolling after 7 seconds
    // Since this useEffect runs on page load, we need to account for the time it takes for the animation to go away. We need to coordinate the timing of this. Hence why we chose 7 seconds (7000 ms)
    const enableScrollTimeout = setTimeout(() => {
      document.body.classList.remove("disable-scroll");
    }, 7000);

    return () => {
      clearTimeout(enableScrollTimeout);
      document.body.classList.remove("disable-scroll"); // Cleanup on component unmount
    };
  }, []); // Empty dependency array to run only on component mount (In this case, it's the page load)

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "white",
          zIndex: 99999, //Ensuring both components of cursor are on top of everything
        }}
        outerStyle={{
          border: "3px solid white",
          zIndex: 99999,
        }}
      />

      {!loadingComplete ? (
        <>
          <LoadingScreen onComplete={handleLoadingComplete} />
        </>
      ) : (
        <div className={fadeWebsiteContentIn ? "fade-in" : "fade-out"}>
          <Header />

          <Hero />

          <About />

          <Experience />

          <Portfolio />

          <Contact />

          <div className="ios-peek-bottom"></div>
        </div>
      )}
    </>
  );
}

export default App;
