import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
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
  },
];
const CarouselSlider = () => {
  return (
    <div
      className="container"
    >
      <Carousel fade touch="true">
        {ImgData.map((item) => {
          return <Carousel.Item interval={2500} key={item.title}>
            <img
              className="d-block w-100"
              src={item?.src}
              alt={item?.title}
            />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
        })}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
