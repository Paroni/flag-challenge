import React, {useState} from 'react';
import {millisToMinutesAndSeconds} from "../Util";
import NavigationButton from "../NavigationButton";

function TimeTrialVictory(
  props: {
    totalTime: number
    handleScoreUpload: (score: number, nickname: string) => void
    handleReset: () => void
  }
) {
  const [nickname, setNickname] = useState("");

  function handleNicknameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNickname(event.target.value)
  }

  return (
    <div className={"TimeTrialVictory"}>
      <h2>You won!</h2>
      <div className={"TimeTrialVictory-information"}>
        <div>
          <p>Your time was:</p>
          <p className={"TimeTrialVictory-time"}>{millisToMinutesAndSeconds(props.totalTime)}</p>
        </div>
      </div>

      <div className={"TimeTrialVictory-input-container"}>
        <label className={"TimeTrialVictory-label"}>Your nickname here:</label>
        <input
          className={"TimeTrialVictory-input"}
          type={"text"}
          name={"nickname"} value={nickname}
          onChange={handleNicknameChange}
          maxLength={20}
        />
      </div>

      <div className={"TimeTrialVictory-navigation-container"}>
        <div onClick={() => props.handleScoreUpload(props.totalTime, nickname)}>
          <NavigationButton target={"/leaderboards"} text={"Upload Score"}/>
        </div>

        <div onClick={() => props.handleReset()}>
          <NavigationButton target={"/challenge"} text={"Start Over"}/>
        </div>
      </div>
    </div>
  )
}

export default TimeTrialVictory;