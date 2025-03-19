import "./slider.scss";
import { useState } from "react";

export default function Slider({ images }) {
  //logic to conditionally render the slider
  const [imageIndex, setImageIndex] = useState(null);
  console.log("imageIndex:", imageIndex);

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src="/arrow.png" className="directionArrowsLeft" alt="" />
          </div>

          <div className="imageContainer">
            <img src={images[imageIndex]} className="sliderimage" alt="" />
          </div>

          <div className="arrow">
            <img src="/arrow.png" className="directionArrowRight" alt="" />
          </div>

          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}

      <div className="biggerImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>

      <div className="smallerImages">
        {images.slice(1).map((image, index) => (
          <img src={image} key={index} onClick={() => setImageIndex(index + 1)} />
        ))}
      </div>
    </div>
  );
}
