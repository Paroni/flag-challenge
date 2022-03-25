import React from 'react';
import {millisToMinutesAndSeconds} from "../Util";
import NavigationButton from "../NavigationButton";

function TimeTrialVictory(
  props: {
    totalTime: number
    handleScoreUpload: () => void
    handleReset: () => void
  }
) {
  return (
    <div className={"TimeTrialVictory"}>
      <h2>You won!</h2>
      <div className={"TimeTrialVictory-information"}>
        <div>
          <p>Your time was:</p>
          <p className={"TimeTrialVictory-time"}>{millisToMinutesAndSeconds(props.totalTime)}</p>
        </div>
      </div>

      <div className={"TimeTrialVictory-navigation-container"}>
        <div onClick={() => props.handleScoreUpload()} >
          <NavigationButton target={"/leaderboards"} text={"Upload Score"}/>
        </div>

        <div onClick={() => props.handleReset()}>
          <NavigationButton target={"/challenge"} text={"Start Over"}/>
        </div>
      </div>
    </div>
  )
}

export default TimeTrialVictory;