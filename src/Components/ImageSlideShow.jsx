import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/MISC/image-slideshow.scss"

import Slider from "react-slick";

const ImageSlideShow = () => {
  let settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 2000,
    vertical: true,
    variableWidth: true
  };

  return (

      <Slider {...settings}>
        <div>
          <img
            src="./assets/slideshow/smucker-conclusion.JPG"
            className="slideshow-image"
            style={{ width: "40%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="./assets/slideshow/smucker-orientation.JPG"
            className="slideshow-image"
            style={{ width: "40%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="./assets/slideshow/recwell.jpg"
            className="slideshow-image"
            style={{ width: "40%", height: "auto" }}
          />
        </div>
      </Slider>

  );
};

export default ImageSlideShow;
