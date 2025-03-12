import React from "react";
import TestimonialsCard from "./../../Shared/Components/TestimonialsCard/TestimonialsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Ensure the styles are applied
import img1 from "./../../Assets/Images/testimonials/1.jpg";
import img2 from "./../../Assets/Images/testimonials/2.jpg";
import img3 from "./../../Assets/Images/testimonials/3.jpg";
import img4 from "./../../Assets/Images/testimonials/4.jpg";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const ImgData = [
  { title: "Image One", src: img1 },
  { title: "Image Two", src: img2 },
  { title: "Image Three", src: img3 },
  { title: "Image Four", src: img4 },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <Carousel
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={800}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding"
      >
        {ImgData.map((item) => (
          <TestimonialsCard data={item} key={item.title} />
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;