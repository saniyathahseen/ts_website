import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
const ImgData = {
  0: {
    title: "ImageOne",
    src: "../../Assets/Images/one.jpg"
  },
  1: {
    title: "ImageTwo",
    src: "../../Assets/Images/2.jpg"
  },
  2: {
    title: "ImageThree",
    src: "../../Assets/Images/3.jpg"
  },
  3: {
    title: "ImageFour",
    src: "../../Assets/Images/4.jpg"
  },
};
const CarouselSlider = () => {
  return (
    <div
      class="container"
    >
      <Carousel fade touch="true">
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={ImgData?.[0]?.src}
            alt={ImgData?.[0]?.title}
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={ImgData?.[1]?.src}
            alt={ImgData?.[1]?.title}
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={ImgData?.[2]?.src}
            alt={ImgData?.[2]?.title}
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={ImgData?.[3]?.src}
            alt={ImgData?.[3]?.title}
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
