import React from "react";
import Carousel from "react-multi-carousel";
import "./ImageSlider.css"
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ImgData = {
  0: {
    title: "ImageOne",
    src: "https://drive.google.com/uc?export=view&id=1cXYFTOCLNo7H0mvm6-BPWzRXV4fqIBXY"
  },
  1: {
    title: "ImageTwo",
    src: "https://drive.google.com/uc?export=view&id=1NscLZ99LZCtnEgE3f35NE0HjGZ9p1HRn"
  },
  2: {
    title: "ImageThree",
    src: "https://drive.google.com/uc?export=view&id=1C6_DB8yMNYk71Yyclvx0Hp8ZafBv03i_"
  },
  3: {
    title: "ImageFour",
    src: "https://drive.google.com/uc?export=view&id=1YTcfJa-Htm7nCnABGj33Ly0cfUEKH3dk"
  },
};
const ImageSlider = () => {
  return (
    <Carousel
      draggable={false}
      showDots={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="img-container">
        <img
          className="d-block w-100"
          src={ImgData?.[0]?.src}
          alt={ImgData?.[0]?.title}
        />
      </div>
      <div className="img-container">
        <img
          className="d-block w-100"
          src={ImgData?.[1]?.src}
          alt={ImgData?.[1]?.title}
        />
      </div>
      <div className="img-container">
        <img
          className="d-block w-100"
          src={ImgData?.[2]?.src}
          alt={ImgData?.[2]?.title}
        />
      </div>
      <div className="img-container">
        <img
          className="d-block w-100"
          src={ImgData?.[3]?.src}
          alt={ImgData?.[3]?.title}
        />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
