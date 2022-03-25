import React from 'react';
import {Country} from "../Countries";
import Flag from "../Flag";
import Choices from "../Choices";
import NavigationButton from "../NavigationButton";

function TimeTrialLoss(
  props: {
    correctCountry: Country
    currentOptions: Country[]
    selectedOption: number
    handleSelection: () => void
    handleReset: () => void
  }
) {
  return (
    <div className={"TimeTrialChallenge-container"}>
      <div className={"TimeTrialChallenge-flag-container"}>
        <Flag country={props.correctCountry}/>
      </div>
      <Choices options={props.currentOptions} selectedOption={props.selectedOption} correctChoice={props.correctCountry}
               handleSelection={props.handleSelection} isLocked={true} isAnswerShown={true}
      />
      <div>
        <h2>You lost!</h2>
        <div onClick={() => props.handleReset()}>
          <NavigationButton target={"/challenge"} text={"Try Again"}/>
        </div>
      </div>
    </div>
  )
}

export default TimeTrialLoss;