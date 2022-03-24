import React from 'react';
import NavigationButton from "../NavigationButton";

function TimeTrialStart(
  props: {
    handleStart: () => void
  }
) {
  return (
    <div className={"TimeTrialStart"}>
      <div className={"TimeTrialStart-information"}>
        In Flag Challenge, your goal is to identify flags as quickly as possible. Be careful, because even a single wrong answer means you lose the challenge! Can you learn the flags well enough to get to the top of the leaderboards?
      </div>

      <div className={"TimeTrialStart-navigation-container"}>
        <div onClick={() => props.handleStart()} className={"NavigationButton"}>
          <p className={"NavigationButton-link"}>Start!</p>
        </div>

        <NavigationButton target={"/"} text={"Back"}/>
      </div>
    </div>
  )
}

export default TimeTrialStart;