import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Fullstack Developer",
          "App Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Arduino",
          "MicroPython",
          "Hardware Service",
          "Software Insatller",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
