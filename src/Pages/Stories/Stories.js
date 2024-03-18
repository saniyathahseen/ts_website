import React from "react";
import "./Stories.css";
import StoriesCard from "../../Shared/Components/StoriesCard/StoriesCard"
const userData = [
  {
    title: "Dubai",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL",
    src: "https://drive.google.com/uc?export=view&id=1cXYFTOCLNo7H0mvm6-BPWzRXV4fqIBXY",
    date: "june 15, 2021",
    review: "It unfolded like a scene straight out of a movie as VISHAL &amp;AISHWARYA took their last phera."
  },
  {
    title: "Bangalore",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL",
    src: "https://drive.google.com/uc?export=view&id=1NscLZ99LZCtnEgE3f35NE0HjGZ9p1HRn",
    date: "May 20, 2021",
    review: "It unfolded like a scene straight out of a movie as VISHAL &amp;AISHWARYA took their last phera."
  },
  {
    title: "HYDERABAD",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL",
    src: "https://drive.google.com/uc?export=view&id=1YTcfJa-Htm7nCnABGj33Ly0cfUEKH3dk",
    date: "nov 15, 2021",
    review: "It unfolded like a scene straight out of a movie as VISHAL &amp;AISHWARYA took their last phera."
  },
];
const About = () => {
  let listItems = userData.map(
    (element) => {
      return (
        <StoriesCard data={element} />
      )
    });
  return (
    <div>{listItems}</div>
  );
};

export default About;
