import React from 'react';

import {ReactComponent as FinlandFlag} from "./flags/finland.svg";
import {ReactComponent as SwedenFlag} from "./flags/sweden.svg";
import {ReactComponent as NorwayFlag} from "./flags/norway.svg";
import {ReactComponent as DenmarkFlag} from "./flags/denmark.svg";
import {ReactComponent as IcelandFlag} from "./flags/iceland.svg";

import {Country} from "./Countries";

const Flags = {
  [Country.FINLAND]: FinlandFlag,
  [Country.SWEDEN]: SwedenFlag,
  [Country.NORWAY]: NorwayFlag,
  [Country.DENMARK]: DenmarkFlag,
  [Country.ICELAND]: IcelandFlag,
}

function Flag(props: { country: Country; }) {
  const FlagComponent = Flags[props.country];
  return (
    <FlagComponent width={400} />
  )
}

export default Flag;