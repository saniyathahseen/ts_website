import React from "react";
import "./Stories.css";
import StoriesCard from "../../Shared/Components/StoriesCard/StoriesCard"
import img4 from "./../../Assets/Images/4.jpg"
import img5 from "./../../Assets/Images/5.jpg"
import img6 from "./../../Assets/Images/6.jpg"
const userData = [
  {
    title: "Dubai",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL",
    src: img4,
    date: "june 15, 2021",
    review: "It unfolded like a scene straight out of a movie as VISHAL &amp;AISHWARYA took their last phera."
  },
  {
    title: "Bangalore",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL",
    src: img5,
    date: "May 20, 2021",
    review: "It unfolded like a scene straight out of a movie as VISHAL &amp;AISHWARYA took their last phera."
  },
  {
    title: "HYDERABAD",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL",
    src: img6,
    date: "nov 15, 2021",
    review: "It unfolded like a scene straight out of a movie as VISHAL &amp;AISHWARYA took their last phera."
  },
];
const About = () => {
  let listItems = userData.map(
    (element) => {
      return (
        <StoriesCard data={element} key={element.title} />
      )
    });
  return (
    <div>{listItems}</div>
  );
};

export default About;
