import React from 'react';

function TimeTrialVictory(
  props: {totalTime: number}
) {
  return (
    <div>
      <h2>You won!</h2>
      <h2>{props.totalTime}</h2>
    </div>
  )
}

export default TimeTrialVictory;