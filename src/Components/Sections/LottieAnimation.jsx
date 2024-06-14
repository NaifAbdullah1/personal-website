import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import PropTypes from "prop-types";

const LottieAnimation = ({ animationData, loop = false, autoplay = true }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: loop,
      autoplay: autoplay,
      animationData: animationData,
    });

    return () => anim.destroy(); // Clean up animation instance on component unmount
  }, [animationData, loop, autoplay]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

LottieAnimation.propTypes = {
  animationData: PropTypes.object.isRequired,
  loop: PropTypes.func,
  autoplay: PropTypes.func,
};

export default LottieAnimation;
