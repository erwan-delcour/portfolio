import * as React from "react";
import Typewriter from "typewriter-effect";

function Type(): React.ReactElement {
  return (
    <Typewriter
      options={{
        strings: [
          "Developpeur Full-Stack",
          "Architecte logiciel",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;