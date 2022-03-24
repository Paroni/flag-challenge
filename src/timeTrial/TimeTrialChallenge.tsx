import Flag from "../Flag";
import Choices from "../Choices";
import React from "react";
import {Country} from "../Countries";

export default function TimeTrialChallenge(
  props: {
    correctCountry: Country
    currentOptions: Country[]
    selectedOption: number
    timeElapsed: number
    handleSelection: (index: number) => void
  }
) {

  function millisToMinutesAndSeconds(millis: number) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds.toFixed(2);
  }

  return (
    <div className={"TimeTrialChallenge-container"}>
      <div className={"TimeTrialChallenge-flag-container"}>
        <Flag country={props.correctCountry}/>
      </div>

      <Choices options={props.currentOptions} selectedOption={props.selectedOption} correctChoice={props.correctCountry}
               handleSelection={props.handleSelection} isLocked={false} isAnswerShown={false}
      />
      <div className={"TimeTrialChallenge-timer"}>
        {millisToMinutesAndSeconds(props.timeElapsed)}
      </div>
    </div>
  )
}