import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../scss/loading-screen.scss";

// The initial intro screen that appears when website is loaded
const Loading = ({ onComplete }) => {
  const [fadeState, setFadeState] = useState("fade-out");

  // Makes the logo not appear on page load for only 1 sec
  useEffect(() => {
    // After 1 second, fade the logo in
    const fadeLogoInTimer = setTimeout(() => {
      // Fades the logo in by applying the fade-in class to the page
      setFadeState("fade-in");
    }, 1000);

    // After 3 seconds, fade out the logo and call onComplete to continue to the site
    const fadeLogoOutTimer = setTimeout(() => {
      setFadeState("fade-out");
      setTimeout(onComplete, 1000); // 1 sec for fade-out
    }, 3000);

    return () => {
      clearTimeout(fadeLogoInTimer);
      clearTimeout(fadeLogoOutTimer);
    };
  }, [onComplete]);

  return (
    <div className={`loading-container ${fadeState}`}>
      <img
        src="./assets/logo.png"
        alt="Loading Screen Logo"
        className="loading-logo"
      />
    </div>
  );
};

// Prop validation: Needed for when a child component uses a prop that was passed down from parent
Loading.propTypes = {
  onComplete: PropTypes.func.isRequired, // Indicate that 'onComplete' is required and is a function
};

export default Loading;
