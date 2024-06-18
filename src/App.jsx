/*

- Consider offloading the styling of the sections onto a different file/s

- Implement this on the hero page: https://react-scroll-parallax.damnthat.tv/docs/examples/advanced-banners

- For the remaining sections, consider implementing this: https://codesandbox.io/p/sandbox/sticky-parallax-3hsg6?file=%2Fsrc%2Findex.tsx
Here's the full doc: https://www.react-spring.dev/docs/components/parallax

-In the experience section, we want to display company, tenure, and company link info, rle name, etc... 
Consider addign some hover animation on the company logo cards wherein if the user hovers over the card, the card either will fade into the details above. Just make sure to make it onClick (rather than onHover) when on mobile. Use the isOnMobile react library for this one. This one is a great example: https://codesandbox.io/p/sandbox/animated-card-component-using-reactjs-yvhil?file=%2Fsrc%2Findex.js
Alternatively, we can make clicking the card result in expanding it with further information  

- Inspect the parts where the code generates repitive components. (E.g., the marquee, the company cards, especially the dialog cards) and see if we can simplify that code by employing the map() function. Just like what we did with the marquee

- Make your alt texts more descriptive

- Add a button that takes you all the way up

- The correct way to solve the problem in which the height of the form's card changes for a split second is to set a constant height for the card when the user submits the form. And then set the height back to "auto" when the form re-appears. We've added  the onExited and onEntered functions to the form's CSSTransition group. It sort of fixed the problem of the split second rendering. But it works sporadically. Look into it later, but for now, it's good.

-On mobile, when we scroll over the DoIT projects, the performance takes a hit. Investigate why this is happening. Maybe we need to compress the images or heavily reduce the text on there (we can offload any important details to the dialog.)

- EmailJS has a private key that we can use to secure our mailing service. Look into how we can incorporate it. This sounds like a security token. Also, investigate all security concerns from this contact form. I heard people can email other using YOUR email address. 

- Make sure to understand how styled components work. Especially the Resume one. 

- Organize all of your files in the project directory. Establish a naming convention for all the files per their types. 

- Resolve any console errors or suppress them if needed. 

- Look into meta-data you could add. Other components should have their equivalent of "alt text", an example is adding the aria-label

-Use both WAVE AND Lighthouse to check the quality of your site and implement the suggested fixes. 

- In teh contact form, consider making the Message TextFielf with 3-4 rows. You'll then have to adjust the sizing of the contact form for the animation. 

- The problem with the unstable card height with the contact form still persists. Check it again (low priority)

- Minimize the amount of upfront text as much as you can. Other examples can be seen with minimal text upfront. All the text is offloaded behind "learn more" buttons where they belong

- Make sure we have non-skipping headers. In the About section, the "Hello" and "My name is Naif Abdullah" should realisticly have h2, but they're using h3. Re-evaluate whether this is okay. Though h2 is way too big

- Dig through your hard drive for professional photos to add

- See if you can do away with the gallery's css and make it css in js instead
*/

import ProgressBar from "react-scroll-progress-bar";
import Header from "./components/Header.jsx";

import AnimatedCursor from "react-animated-cursor";
import Hero from "./components/sections/hero/Hero.jsx";
import About from "./components/sections/about/About.jsx";
import Experience from "./components/sections/experience/Experience.jsx";
import Portfolio from "./components/sections/portfolio/Portfolio.jsx";
import Contact from "./components/sections/contact/Contact.jsx";
import { isMobileOnly } from "react-device-detect";

import "./scss/app.scss";
import { COLORS, Z_INDICES } from "./constants.jsx";

function App() {
  return (
    <>
      {!isMobileOnly && (
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
      )}

      <ProgressBar height="6" bgcolor={COLORS.lightBlue} duration="0.25" />

      <Header />

      <Hero />

      <About />

      <Experience />

      <Portfolio />

      <Contact />

      <div style={appStyles.iosPeekbBottom}></div>
    </>
  );
}

const appStyles = {
  animatedCursorInner: {
    backgroundColor: COLORS.lightGray,
    zIndex: Z_INDICES.maxZIndex, //Ensuring both components of cursor are on top of everything
  },
  animatedCursorOuter: {
    border: `3px solid ${COLORS.lightGray}`,
    zIndex: Z_INDICES.maxZIndex,
  },
  /*The two css queries below serve to fade the contents of the site in when the loading logo has finished fading out*/
  fade: {
    in: {
      opacity: "1",
      transition: "opacity 1s" /*This controls the speed of the fade in*/,
    },
    out: {
      opacity: "0",
      transition: "opacity 1s",
    },
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
