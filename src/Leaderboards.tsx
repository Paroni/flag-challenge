import React from 'react';
import {Link} from "react-router-dom";

function Leaderboards() {
  return (
    <div className="Leaderboards">
      <div>
        <p>
          Leaderboards
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

export default Leaderboards;