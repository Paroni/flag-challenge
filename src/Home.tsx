import React from 'react';
import NavigationButton from "./NavigationButton";

function Home() {
  return (
    <div className="Home">
      <NavigationButton target={"/challenge"} text={"Play Flag Challenge!"} />
      <NavigationButton target={"/leaderboards"} text={"Leaderboards"} />
      <NavigationButton target={"/about"} text={"About"} />
      <NavigationButton target={"/author"} text={"Author"} />
    </div>
  );
}

export default Home;