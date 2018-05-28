
export function secondsToHms(sec) {
  sec = Number(sec);
  var h = Math.floor(sec / 3600);
  var m = Math.floor(sec % 3600 / 60);
  var s = Math.floor(sec % 3600 % 60);
  return `${h}:${m}:${s}`;
}
