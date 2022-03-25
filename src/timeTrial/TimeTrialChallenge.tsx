import Flag from "../Flag";
import Choices from "../Choices";
import React from "react";
import {Country} from "../Countries";
import {millisToMinutesAndSeconds} from "../Util";

export default function TimeTrialChallenge(
  props: {
    correctCountry: Country
    currentOptions: Country[]
    selectedOption: number
    timeElapsed: number
    handleSelection: (index: number) => void
  }
) {

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