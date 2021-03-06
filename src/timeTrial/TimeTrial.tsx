import React, {useEffect, useState} from 'react';
import {generateCountries} from "../Countries";
import TimeTrialVictory from "./TimeTrialVictory";
import TimeTrialLoss from "./TimeTrialLoss";
import TimeTrialStart from "./TimeTrialStart";
import TimeTrialChallenge from "./TimeTrialChallenge";

import {collection, addDoc} from "firebase/firestore";
import {db} from "../index";

async function addScore(score: number, nickname: string) {
  try {
    const docRef = await addDoc(collection(db, "highScores"), {
      score: score,
      nickname: nickname
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default function TimeTrial() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [countriesToGuess, setCountriesToGuess] = useState(generateCountries(2));
  const [isTrialFailed, setIsTrialFailed] = useState(false);
  const [isTrialStarted, setIsTrialStarted] = useState(false);
  const [isTrialFinished, setIsTrialFinished] = useState(false);
  const [currentOptions, setCurrentOptions] = useState(generateCountries(4, countriesToGuess[answered]))
  // selectedOption value 4 means that nothing is selected
  const [selectedOption, setSelectedOption] = useState(4);

  //TODO: Fix generateCountries() sometimes not including the correct answer (perhaps related to resetting?)

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
      <TimeTrialLoss
        correctCountry={countriesToGuess[answered]}
        currentOptions={currentOptions}
        handleSelection={() => {}}
        selectedOption={selectedOption}
        handleReset={handleReset}
      />
    )
  } else if (isTrialFinished) {
    return (
      <TimeTrialVictory
        totalTime={timeElapsed}
        handleScoreUpload={handleScoreUpload}
        handleReset={handleReset}
      />
    )
  } else {
    return (
      <TimeTrialChallenge
        correctCountry={countriesToGuess[answered]}
        currentOptions={currentOptions}
        handleSelection={handleSelection}
        selectedOption={selectedOption}
        timeElapsed={timeElapsed}
      />
    )
  }

  function handleSelection(index: number) {
    setSelectedOption(index);
    let isTrialFailed = currentOptions[index] !== countriesToGuess[answered];
    setIsTrialFailed(isTrialFailed);

    if (!isTrialFailed) {
      let nextAnswered = answered + 1;
      if (nextAnswered === countriesToGuess.length) {
        setIsTrialFinished(true);
        setIsTimerRunning(false);
      }
      setAnswered(nextAnswered);
      setCurrentOptions(generateCountries(4, countriesToGuess[nextAnswered]))
      setSelectedOption(4);
    }
  }

  function handleScoreUpload(score: number, nickname: string) {
    addScore(score, nickname).then();
    // TODO: Add automatic navigation to leaderboards
  }

  function handleStart() {
    setIsTrialStarted(true);
    setIsTimerRunning(true);
  }

  function handleReset() {
    setIsTrialStarted(false);
    setIsTimerRunning(false);
    setIsTimerRunning(false);
    setTimeElapsed(0);
    setAnswered(0);
    setCountriesToGuess(generateCountries(2));
    setIsTrialFailed(false);
    setIsTrialFinished(false);
    setCurrentOptions(generateCountries(4, countriesToGuess[answered]));
    setSelectedOption(4);
  }
}