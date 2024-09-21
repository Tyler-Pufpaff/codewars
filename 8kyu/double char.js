// Description:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let newArr = str.split("");
    let answer = newArr.map(i => i + i).join("");
    return answer
  }