import React from 'react';

import Typewriter from 'typewriter-effect';

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "SWE Intern @Creative Emporium",
          "ex-Intern @Licious",
          "ex-Intern @Persistent Systems",
          "ex-Intern @Techcoopers",
          "Full - Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
