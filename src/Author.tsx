import React from 'react';
import {Link} from "react-router-dom";

function Author() {
  return (
    <div className="Author">
      <div>
        <p>
          Hi! I'm Sami Kalmi, the author of this project.
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

export default Author;