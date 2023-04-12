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
    title:"ImageOne",
    src:"https://cdn.pixabay.com/photo/2016/06/29/04/39/bride-1486004_960_720.jpg"
  },
  1: {
    title:"ImageTwo",
    src:"https://cdn.pixabay.com/photo/2015/03/30/12/35/sunset-698501_960_720.jpg"
  },
  2: {
    title:"ImageThree",
    src:" https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_960_720.jpg"
  },
  3: {
    title:"ImageTwo",
    src:"https://cdn.pixabay.com/photo/2015/03/30/12/35/sunset-698501_960_720.jpg"
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
