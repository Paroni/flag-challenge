import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div>
        <Link to={"/challenge"} >
          Play Flag Challenge!
        </Link>
      </div>
      <div>
        <Link to={"/leaderboards"} >
          Leaderboards
        </Link>
      </div>
      <div>
        <Link to={"/about"} >
          About
        </Link>
      </div>
      <div>
        <Link to={"/author"} >
          Author
        </Link>
      </div>
    </div>
  );
}

export default Home;