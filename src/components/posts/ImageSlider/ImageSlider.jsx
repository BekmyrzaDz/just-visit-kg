import React, { useState } from "react";
import "../../../index.css";
import { Box } from "@mui/system";

const ImageSlider = ({ slides }) => {
  console.log(slides);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    marginBottom: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
    transition: "all 10ms ease 300ms",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrevios = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const dotsStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    color: "var(--white)",
  };

  const dotsActiveStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    color: "var(--brown)",
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Box sx={sliderStyles}>
      <Box sx={leftArrowStyles} onClick={goToPrevios}>
        ❰
      </Box>
      <Box sx={rightArrowStyles} onClick={goToNext}>
        ❱
      </Box>
      <Box sx={slideStyles}></Box>
      <Box sx={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <Box
            key={slideIndex}
            sx={currentIndex === slideIndex ? dotsActiveStyles : dotsStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider;
