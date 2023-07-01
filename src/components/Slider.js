import { useState } from "react";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider_wrapper">
      <button onClick={goToPreviousSlide}>
        <span className="material-icons">arrow_back_ios_new</span>
      </button>
      <p>{images[currentIndex]}</p>
      <button onClick={goToNextSlide}>
        <span className="material-icons">chevron_right</span>
      </button>

      <div className="pagination-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};
export default Slider;
