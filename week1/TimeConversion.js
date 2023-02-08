/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time
*/

function timeConversion(s) {
  // Write your code here
  if (s.slice(8) === "PM" && parseInt(s.slice(0, 2)) < 12) {
    return parseInt(s.slice(0, 2)) + 12 + s.slice(2, 8);
  } else if (s.slice(8) === "AM" && parseInt(s.slice(0, 2)) === 12) {
    return "00" + s.slice(2, 8);
  } else {
    return s.slice(0, 8);
  }
}
