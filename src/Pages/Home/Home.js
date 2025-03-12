import React from "react";
import "./Home.css";
import ImageSlider from "./../../Shared/Components/ImageSlider/ImageSlider";
import ImageCards from "./../../Shared/Components/ImageCards/ImageCards";
import CarouselSlider from "./../../Shared/Components/Carousel/Carousel";
import img1 from "./../../Assets/Images/home/1.jpg";
import img2 from "./../../Assets/Images/home/2.jpg";
import img3 from "./../../Assets/Images/home/3.jpg";


const userData = [
  {
    title: "Dubai",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL // HYDERABAD",
    src: img1
  },
  {
    title: "Bangalore",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL // HYDERABAD",
    src: img2
  },
  {
    title: "HYDERABAD",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL // HYDERABAD",
    src: img3
  },
];

const Home = () => {
  return (
    <div className="container text-center my-5">
      {/* Carousel Section */}
      <div className="mb-4">
        <CarouselSlider key={"CarouselSlider"} />
      </div>

      {/* Main Heading */}
      <h1 className="main-heading">YOU FEEL. I FOCUS. WE FRAME</h1>

      {/* Description Section */}
      <div className="text-section">
        <p>
          A wedding is a validation coupled with the showcase of love inclusive of
          various events with exotic venues, food, guests, dresses, jewelry, and so
          on—What if it could never be recorded?
        </p>
        <p>
          A chronology of a couple’s journey where they vow together to be one.
        </p>
        <h2>We are creating fiction out of reality.</h2>
      </div>

      {/* Image Slider */}
      <div className="my-4">
        <ImageSlider key={"ImageSlider"} />
      </div>

      {/* Love Stories Section */}
      <h1 className="my-3">REAL LOVE STORIES</h1>
      <h2 className="mb-4">
        LIKE A RIVER FLOWS SURELY TO THE SEA, SO IT GOES SOME THINGS ARE MEANT TO BE.
      </h2>

      {/* Card Group */}
      <div className="row g-4">
        {userData.map((item) => (
          <div className="col-md-6 col-lg-4" key={item.title}>
            <ImageCards data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;