import React from 'react';
import NavigationButton from "./NavigationButton";

function Home() {
  return (
    <div className="Home">
      <div className={"Home-information"}>
        Welcome to Flag Challenge, an educational game for learning the flags of Europe!
      </div>
      <div className={"Home-navigation-container"}>
        <NavigationButton target={"/challenge"} text={"Play Flag Challenge!"} />
        <NavigationButton target={"/leaderboards"} text={"Leaderboards"} />
        <NavigationButton target={"/about"} text={"About"} />
        <NavigationButton target={"/author"} text={"Author"} />
      </div>
    </div>
  );
}

export default Home;