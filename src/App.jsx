/*



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

- Image gallery not displaying properly on iPhones. Maybe make a slightly different formation for xs widths? maybe another special width for sm? Maybe a different width for each level? 

- Add the animated extending-downwards line beneath the section headers

- Delayed, maybe ask reddit: Consider offloading the styling of the sections onto a different file/s

- Delayed, maybe at a later stage when we want to step up our website's quality: Implement this on the hero page: https://react-scroll-parallax.damnthat.tv/docs/examples/advanced-banners

- Delayed, maybe at a later stage when we want to step up our website's quality: For the remaining sections, consider implementing this: https://codesandbox.io/p/sandbox/sticky-parallax-3hsg6?file=%2Fsrc%2Findex.tsx
Here's the full doc: https://www.react-spring.dev/docs/components/parallax

-Delayed: In the experience section, we want to display company, tenure, and company link info, rle name, etc...
Refer to the conversation with the consultant 
Consider addign some hover animation on the company logo cards wherein if the user hovers over the card, the card either will fade into the details above. Just make sure to make it onClick (rather than onHover) when on mobile. Use the isOnMobile react library for this one. This one is a great example: https://codesandbox.io/p/sandbox/animated-card-component-using-reactjs-yvhil?file=%2Fsrc%2Findex.js
Alternatively, we can make clicking the card result in expanding it with further information  
*/

import ProgressBar from "react-scroll-progress-bar";
import Header from "./components/Header.jsx";
import AnimatedCursor from "react-animated-cursor";
import Hero from "./components/sections/hero/Hero.jsx";
import { isMobileOnly } from "react-device-detect";

import "./scss/app.scss";
import { COLORS, Z_INDICES } from "./constants.jsx";

// We ran into a problem where the .js bundle created upon building is too big (1.1 KB). We'll break it up into smaller chunks that are loaded on-demand. We'll use dynamic imports using React's 'Suspense' and React.Lazy, hence the following import:
import React, { Suspense } from "react";

// Lzy-loaded components:
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
