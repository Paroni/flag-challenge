import React from 'react';
import {Country} from "./Countries";

function Choices(
  props: {
    options: Country[]
    correctChoice: Country
    selectedOption: number;
    handleSelection: (index: number) => void
  }
) {
  const choices: JSX.Element[] = props.options.map((choice, index) => {
    return (
      <div
        key={index}
        className={`
            Choices-option
            ${(props.selectedOption) === index && 'Choices-selected'}
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