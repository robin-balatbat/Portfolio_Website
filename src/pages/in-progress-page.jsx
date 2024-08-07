import React from "react";
import Hero from "../components/Hero";

import ReactIcon from "../assets/React-icon.png";

const InProgress = () => {
  return (
    <Hero
      title="Work in Progress"
      paragraphContent="Hi there! Thanks for stopping by. This page is currently under construction, 
      so please excuse the mess as I build something exciting. 
      Check back soon to see the updates and new content I'm working on. 
      In the meantime, feel free to explore the rest of the site!"
      image={{
        src: ReactIcon,
        alt: "React Icon",
        height: "auto",
        width: "40%"
      }}
    />
  );
};

export default InProgress;
