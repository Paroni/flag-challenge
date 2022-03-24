import React from 'react';
import NavigationButton from "../NavigationButton";

function TimeTrialStart(
  props: {
    handleStart: () => void
  }
) {
  return (
    <div>
      <div>
        <button onClick={() => props.handleStart()}>
          <p>Start!</p>
        </button>
      </div>

      <NavigationButton target={"/"} text={"Back"}/>
    </div>
  )
}

export default TimeTrialStart;