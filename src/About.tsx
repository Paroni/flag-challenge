import React from 'react';
import {Link} from "react-router-dom";

function About() {
  return (
    <div className="About">
      <div>
        <p>
          Flag Challenge is based on ...
        </p>
      </div>
      <div>
        <Link to={"/"} >
          Back
        </Link>
      </div>
    </div>
  );
}

export default About;