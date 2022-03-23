import React, {useEffect, useState} from 'react';
import {generateCountries} from "../Countries";
import TimeTrialVictory from "./TimeTrialVictory";
import TimeTrialLoss from "./TimeTrialLoss";
import TimeTrialStart from "./TimeTrialStart";
import TimeTrialChallenge from "./TimeTrialChallenge";

export default function TimeTrial() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [countriesToGuess] = useState(generateCountries(2));
  const [isTrialFailed, setIsTrialFailed] = useState(false);
  const [isTrialStarted, setIsTrialStarted] = useState(false);
  const [isTrialFinished, setIsTrialFinished] = useState(false);
  const [currentOptions, setCurrentOptions] = useState(generateCountries(4, countriesToGuess[answered]))
  // selectedOption value 4 means that nothing is selected
  const [selectedOption, setSelectedOption] = useState(4);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed(time => time + 10);
      }, 10)
    }
    return () => {
      if (!!interval) {clearInterval(interval)}
    };
  })

  if (!isTrialStarted) {
    return (
      <TimeTrialStart handleStart={handleStart}/>
    )
  } else if (isTrialFailed) {
    return (
      <TimeTrialLoss />
    )
  } else if (isTrialFinished) {
    return (
      <TimeTrialVictory totalTime={timeElapsed}/>
    )
  } else {
    return (
      <TimeTrialChallenge
        correctCountry={countriesToGuess[answered]}
        currentOptions={currentOptions}
        handleAnswer={handleAnswer}
        handleSelection={handleSelection}
        selectedOption={selectedOption}
        timeElapsed={timeElapsed}
      />
    )
  }

  function handleSelection(index: number) {
    setSelectedOption(index);
  }

  function handleAnswer() {
    setIsTrialFailed(currentOptions[selectedOption] !== countriesToGuess[answered]);

    let nextAnswered = answered + 1;
    if (nextAnswered === countriesToGuess.length) {
      setIsTrialFinished(true);
      setIsTimerRunning(false);
    }
    setAnswered(nextAnswered);
    setCurrentOptions(generateCountries(4, countriesToGuess[nextAnswered]))
    setSelectedOption(4);
  }

  function handleStart() {
    setIsTrialStarted(true);
    setIsTimerRunning(true);
  }
}