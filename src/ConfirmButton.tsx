import React from 'react';

function ConfirmButton(props: { buttonTitle: string; handleClick: () => void}) {
  return (
    <button onClick={props.handleClick}>
      <p>{props.buttonTitle}</p>
    </button>
  )
}

export default ConfirmButton;