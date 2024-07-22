import React from "react";
import { TypeAnimation } from "react-type-animation";

function Animation() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Frontend Developer",
        2300,
        "Software Engineer",
        2300,
        "FullStack Developer",
        2300,
      ]}
      speed={30}
      repeat={Infinity}
    />
  );
}

export default Animation;