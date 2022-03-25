import {QueryDocumentSnapshot, DocumentData, SnapshotOptions} from "firebase/firestore";

export function millisToMinutesAndSeconds(millis: number) {
  let minutes = Math.floor(millis / 60000);
  let seconds = ((millis % 60000) / 1000);
  return (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds.toFixed(2);
}

export class HighScore {
  score: number | undefined;
  nickname: string | undefined;

  constructor(score: number | undefined, nickname: string | undefined) {
    this.score = score;
    this.nickname = nickname;
  }
}

// Firestore data converter
export const highScoreConverter = {
  toFirestore: (highScore: HighScore) => {
    return {
      score: highScore.score,
      nickname: highScore.nickname
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>, options: SnapshotOptions) => {
    const data = snapshot.data(options);
    return data ? new HighScore(data.score, data.nickname) : new HighScore(undefined, undefined);
  }
};