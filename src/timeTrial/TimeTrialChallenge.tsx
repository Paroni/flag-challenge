import SectionTitle from "../SectionTitle";
import Flag from "../Flag";
import Choices from "../Choices";
import ConfirmButton from "../ConfirmButton";
import React from "react";
import {Country} from "../Countries";

export default function TimeTrialChallenge(
  props: {
    correctCountry: Country
    currentOptions: Country[]
    selectedOption: number
    timeElapsed: number
    handleSelection: (index: number) => void
    handleAnswer: () => void
  }
) {

  return (
    <div>
      <SectionTitle sectionTitle={"Time Trial"}/>
      <Flag country={props.correctCountry}/>
      <Choices options={props.currentOptions} selectedOption={props.selectedOption} correctChoice={props.correctCountry}
               handleSelection={props.handleSelection}/>
      <p>{props.timeElapsed}</p>
      <ConfirmButton buttonTitle={"Confirm"} handleClick={props.handleAnswer}/>
    </div>
  )
}