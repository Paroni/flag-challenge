import React from 'react';
import NavigationButton from "./NavigationButton";

function Leaderboards() {
  return (
    <div className="Leaderboards">
      <div>
        <p>
          Leaderboards
        </p>
      </div>
      <NavigationButton target={"/"} text={"Back"}/>
    </div>
  );
}

export default Leaderboards;