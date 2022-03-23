import React from 'react';
import {Link} from "react-router-dom";

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

      <div>
        <Link to={"/"} >
          Back
        </Link>
      </div>
    </div>
  )
}

export default TimeTrialStart;