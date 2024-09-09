// Description:
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    let convertHours = h * 60 * 60 * 1000;
    let convertMinutes = m * 60 * 1000;
    let convertSeconds = s * 1000;
    sumHMS = convertHours + convertMinutes + convertSeconds;
    return sumHMS;
  }