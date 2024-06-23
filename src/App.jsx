/*

- Think about how we can make a different looking dialog box without disclosing too much details.
Last resort: Follow a similar format to the previous DoIT cards. But this is the LAST resort. Redundant contnet results in bored users. 

- Complete the smucker cards

- EmailJS has a private key that we can use to secure our mailing service. Look into how we can incorporate it. This sounds like a security token. Also, investigate all security concerns from this contact form. I heard people can email other using YOUR email address. 

- Make sure to understand how styled components work. Especially the Resume one. 

- Look into making the scrolling smooth using "smooth scrollbar" libraries. The following site is an example of what we want for our site in terms of scrolling smoothness: https://www.playground.it/en

- Resolve any console errors or suppress them if needed. 

- Dig through your hard drive for professional photos to add

- See if you can do away with the gallery's css and make it css in js instead

- Image gallery not displaying properly on iPhones. Maybe make a slightly different formation for xs widths? maybe another special width for sm? Maybe a different width for each level? 

- Add the animated extending-downwards line beneath the section headers

- Lazy loading is problematic. Consider finding another alternative to the code-splitting problem or just do away with it. 

- When email sending faisl, either use the lottie animation for failing messages or react-toastify

- See if you can use BrowserStack for testing across different browsers

- Delayed, maybe ask reddit: Consider offloading the styling of the sections onto a different file/s

- Delayed: Implement this on the hero page: https://react-scroll-parallax.damnthat.tv/docs/examples/advanced-banners

- Delayed: For the remaining sections, consider implementing this: https://codesandbox.io/p/sandbox/sticky-parallax-3hsg6?file=%2Fsrc%2Findex.tsx
Here's the full doc: https://www.react-spring.dev/docs/components/parallax

-Delayed: In the experience section, we want to display company, tenure, and company link info, rle name, etc...
Refer to the conversation with the consultant 
Consider addign some hover animation on the company logo cards wherein if the user hovers over the card, the card either will fade into the details above. Just make sure to make it onClick (rather than onHover) when on mobile. Use the isOnMobile react library for this one. This one is a great example: https://codesandbox.io/p/sandbox/animated-card-component-using-reactjs-yvhil?file=%2Fsrc%2Findex.js
Alternatively, we can make clicking the card result in expanding it with further information  

- Delayed: In teh contact form, consider making the Message TextFielf with 3-4 rows. You'll then have to adjust the sizing of the contact form for the animation. 
- Delayed: The correct way to solve the problem in which the height of the form's card changes for a split second is to set a constant height for the card when the user submits the form. And then set the height back to "auto" when the form re-appears. We've added  the onExited and onEntered functions to the form's CSSTransition group. It sort of fixed the problem of the split second rendering. But it works sporadically. Look into it later, but for now, it's good.

- Delayed: We made a change to COLORS.grayBlurBackground. First, try to revert that change to see if it's actually causing us problems in IOS. 
If the reversion of that change did cause problems with the blurryness of the cards' background, then implement that change again (use RGBA colors) and ensure that this change won't cause any problems for working platforms. Test on the live site only. 

- Delayed: Look into meta-data you could add. Other components should have their equivalent of "alt text", an example is adding the aria-label 
*/

import ProgressBar from "react-scroll-progress-bar";
import Header from "./components/misc/Header.jsx";
import AnimatedCursor from "react-animated-cursor";
import Hero from "./components/sections/hero/Hero.jsx";
import { isMobileOnly } from "react-device-detect";

import "./scss/app.scss";
import { COLORS, Z_INDICES } from "./constants.jsx";

import { CssBaseline } from "@mui/material";

// We ran into a problem where the .js bundle created upon building is too big (1.1 KB). We'll break it up into smaller chunks that are loaded on-demand. We'll use dynamic imports using React's 'Suspense' and React.Lazy, hence the following import:
import React, { Suspense } from "react";
import BackToTopButton from "./components/misc/BackToTopButton.jsx";

// Lazy-loaded components:
//const Hero = React.lazy(() => import("./components/sections/hero/Hero.jsx"));
const About = React.lazy(() => import("./components/sections/about/About.jsx"));
const Experience = React.lazy(() =>
  import("./components/sections/experience/Experience.jsx")
);
const Portfolio = React.lazy(() =>
  import("./components/sections/portfolio/Portfolio.jsx")
);
const Contact = React.lazy(() =>
  import("./components/sections/contact/Contact.jsx")
);

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

      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </Suspense>

      <CssBaseline />
      <BackToTopButton />
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
