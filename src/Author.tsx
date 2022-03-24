import React from 'react';
import NavigationButton from "./NavigationButton";

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
      <NavigationButton target={"/"} text={"Back"}/>
    </div>
  );
}

export default Author;