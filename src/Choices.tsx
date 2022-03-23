import React from 'react';
import {Country} from "./Countries";

function Choices(
  props: {
    options: Country[]
    correctChoice: Country
    selectedOption: number;
    handleSelection: (index: number) => void
    isLocked: boolean
    isAnswerShown: boolean
  }
) {
  const choices: JSX.Element[] = props.options.map((choice, index) => {
    return (
      <div
        key={index}
        className={`
            Choices-option
            ${(props.isLocked) && 'Choices-no-hover'}
            ${(props.selectedOption) === index && 'Choices-selected'}
            ${(props.isAnswerShown) && (props.options[index] === props.correctChoice)  && 'Choices-correct'}
        `}
        onClick={() => props.handleSelection(index)}
      >
        <p>{choice}</p>
      </div>
    )
  });

  return (
    <div>
      {choices}
    </div>
  )
}

export default Choices;