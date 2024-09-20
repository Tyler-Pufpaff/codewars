// Description:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x){
    let value = x.reduce(( acc, curr) => acc * curr);
    return value;
  }