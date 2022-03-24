import React from 'react';
import NavigationButton from "./NavigationButton";

function About() {
  return (
    <div className="About">
      <div>
        <p>
          Flag Challenge is based on ...
        </p>
      </div>
      <NavigationButton target={"/"} text={"Back"}/>
    </div>
  );
}

export default About;