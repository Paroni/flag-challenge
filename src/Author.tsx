import React from 'react';
import {Link} from "react-router-dom";

function Author() {
  return (
    <div className="Author">
      <div>
        <p>
          This project was made by Sami Kalmi
        </p>
        <p>
          githublink here!
        </p>
        <p>
          LinkedIn link here!
        </p>
        <p>
          mail address here!
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