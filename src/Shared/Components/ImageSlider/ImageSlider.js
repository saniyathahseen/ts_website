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
const ImgData = [
  {
    title: "ImageOne",
    src: "../../Assets/Images/one.jpg"
  },
  {
    title: "ImageTwo",
    src: "../../Assets/Images/2.jpg"
  },
  {
    title: "ImageThree",
    src: "../../Assets/Images/3.jpg"
  },
  {
    title: "ImageFour",
    src: "../../Assets/Images/4.jpg"
  },];
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
      {ImgData.map((item) => {
        return <div className="img-container">
          <img
            className="d-block w-100"
            src={item?.src}
            alt={item?.title}
          />
        </div>
      })}
    </Carousel>
  );
};

export default ImageSlider;
