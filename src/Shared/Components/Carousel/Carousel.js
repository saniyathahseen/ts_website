import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./../../../Assets/Images/1.jpg"
import img2 from "./../../../Assets/Images/2.jpg"
import img3 from "./../../../Assets/Images/3.jpg"
import img4 from "./../../../Assets/Images/4.jpg"

const ImgData = [
  {
    title: "ImageOne",
    src: img1
  },
  {
    title: "ImageTwo",
    src: img2
  },
  {
    title: "ImageThree",
    src: img3
  },
  {
    title: "ImageFour",
    src: img4
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
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
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
