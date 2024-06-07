/*
- When you're done, see if you can consolidate your css files

- Investigate ways to simplify the Header.jsx code. Make a backup copy and a commit first

- Determine a minimum width for the site. Do this once you've almost done with implementing the site

- For the marquee, we're using two different sets of the same images. See if you can use a single set of images and do the resizing via css 

- Work on Dialog animation

- Wasn't able to make a slideshow for mobile. We may resort to either not showing the slideshow on mobile. Or showing it but disabling the hover effect, we'll also need to make it smaller. 

- Consider offloading the styling of the sections onto a different file/s

- Implement this on the hero page: https://react-scroll-parallax.damnthat.tv/docs/examples/advanced-banners

- For the remaining sections, consider implementing this: https://codesandbox.io/p/sandbox/sticky-parallax-3hsg6?file=%2Fsrc%2Findex.tsx
Here's the full doc: https://www.react-spring.dev/docs/components/parallax

-In the experience section, we want to display company, tenure, and company link info, rle name, etc... 
Consider addign some hover animation on the company logo cards wherein if the user hovers over the card, the card either will fade into the details above. Just make sure to make it onClick (rather than onHover) when on mobile. Use the isOnMobile react library for this one. This one is a great example: https://codesandbox.io/p/sandbox/animated-card-component-using-reactjs-yvhil?file=%2Fsrc%2Findex.js
Alternatively, we can make clicking the card result in expanding it with further information  

- We'll really need to clean and consolidate our CSS and styling. 

- Some of the commonly used codes: 
-> hoverEffect object
-> the "header" style
-> useTheme (though we're not sure if we can consolidate it, doesn't hurt to try though)
*/

import { useState } from "react";
import ProgressBar from "react-scroll-progress-bar";
import Header from "./Components/Header.jsx";
import LoadingScreen from "./Components/LoadingScreen.jsx";
import AnimatedCursor from "react-animated-cursor";
import Hero from "./Components/Sections/Hero.jsx";
import About from "./Components/Sections/About.jsx";
import Experience from "./Components/Sections/Experience.jsx";
import Portfolio from "./Components/Sections/Portfolio.jsx";
import Contact from "./Components/Sections/Contact.jsx";
import { isMobileOnly } from "react-device-detect";

import "./App.scss";
import { COLORS, VALUES } from "./constants.jsx";

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

  return (
    <>
      {!isMobileOnly ? (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={appStyles.animatedCursorInner}
          outerStyle={appStyles.animatedCursorOuter}
        />
      ) : (
        <></>
      )}

      {!loadingComplete ? (
        <>
          <LoadingScreen onComplete={handleLoadingComplete} />
        </>
      ) : (
        <div
          style={fadeWebsiteContentIn ? appStyles.fadeIn : appStyles.fadeOut}
        >
          <ProgressBar height="6" bgcolor={COLORS.lightBlue} duration="0.25" />

          <Header />

          <Hero />

          <About />

          <Experience />

          <Portfolio />

          <Contact />

          <div style={appStyles.iosPeekbBottom}></div>
        </div>
      )}
    </>
  );
}

const appStyles = {
  animatedCursorInner: {
    backgroundColor: COLORS.lightGray,
    zIndex: VALUES.maxZIndex, //Ensuring both components of cursor are on top of everything
  },
  animatedCursorOuter: {
    border: `3px solid ${COLORS.lightGray}`,
    zIndex: VALUES.maxZIndex,
  },
  /*The two css queries below serve to fade the contents of the site in when the loading logo has finished fading out*/
  fadeIn: {
    opacity: "1",
    transition: "opacity 3s" /*This controls the speed of the fade in*/,
  },
  fadeOut: {
    opacity: "0",
    transition: "opacity 1s",
  },
  // Prevents the appearance of the white backdrop due to IOS' elastic scrolling/overscrolling at the bottom of the page
  iosPeekbBottom: {
    position: "fixed",
    zIndex: "-1",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundImage: "linear-gradient(180deg, #121212 0%, #121212 100%)",
  },
};
export default App;
