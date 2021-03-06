import React, {useEffect, useState} from 'react';
import NavigationButton from "./NavigationButton";

import { collection, getDocs } from "firebase/firestore";
import {db} from "./index";
import {HighScore, highScoreConverter, millisToMinutesAndSeconds} from "./Util";

function Leaderboards() {
  const [highScores, setHighScores] = useState<HighScore[]>([]);

  useEffect(() => {
    getDocs(collection(db, "highScores").withConverter(highScoreConverter)).then(data => {
      const highScoresList = data.docs.map(doc => doc.data())
        .filter(highScore => !!highScore.score && typeof highScore.nickname === "string")
        .sort(
        (a, b) => {
          return a.score && b.score ? a.score - b.score : -1
        })
      setHighScores(highScoresList);
    });
  })

  const highScoresTable = (
    <table>
      <tr>
        <th>Score</th>
        <th>Nickname</th>
      </tr>
      {highScores.map(highScore => {
        return (
          <tr>
            <td>{millisToMinutesAndSeconds(!!highScore?.score ? highScore.score : 0)}</td>
            <td>{highScore?.nickname}</td>
          </tr>
        )
      })}
    </table>
  );

  return (
    <div className="Leaderboards">
      <h2>
        Leaderboards
      </h2>
      {highScoresTable}
      <NavigationButton target={"/"} text={"Back"}/>
    </div>
  );
}

export default Leaderboards;