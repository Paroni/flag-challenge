export function millisToMinutesAndSeconds(millis: number) {
  let minutes = Math.floor(millis / 60000);
  let seconds = ((millis % 60000) / 1000);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds.toFixed(2);
}