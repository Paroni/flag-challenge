import React from 'react';
import {Link} from "react-router-dom";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <div>
        <p>There's nothing here!</p>
      </div>
      <div>
        <Link to={"/"} >
          Front Page
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;