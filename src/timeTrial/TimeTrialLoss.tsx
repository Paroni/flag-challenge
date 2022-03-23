import React from 'react';
import {Country} from "../Countries";
import SectionTitle from "../SectionTitle";
import Flag from "../Flag";
import Choices from "../Choices";
import {Link} from "react-router-dom";

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
    <div>
      <SectionTitle sectionTitle={"Time Trial"}/>
      <Flag country={props.correctCountry}/>
      <Choices options={props.currentOptions} selectedOption={props.selectedOption} correctChoice={props.correctCountry}
               handleSelection={props.handleSelection} isLocked={true} isAnswerShown={true}
      />
      <div>
        <h2>You lost!</h2>
        <div>
          <Link to={"/challenge"} onClick={() => props.handleReset()} >
            Start Over
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TimeTrialLoss;