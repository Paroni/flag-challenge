import React from 'react';
import {Link} from "react-router-dom";

function NavigationButton(
  props: {
    target: string
    text: string
  }
) {
  return (
    <div className={"NavigationButton"}>
      <Link to={props.target} className={"NavigationButton-link"}>
        {props.text}
      </Link>
    </div>
  )
}

export default NavigationButton;