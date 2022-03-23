import React from 'react';

function TimeTrialStart(
  props: {
    handleStart: () => void
  }
) {
  return (
    <button onClick={() => props.handleStart()}>
      <p>Start!</p>
    </button>
  )
}

export default TimeTrialStart;