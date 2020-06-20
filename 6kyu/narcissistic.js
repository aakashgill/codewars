// Problem Statement: https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  let valueStrLen = value.toString().length;
  if(valueStrLen == 1) return true;
  var sum = 0;
  var valStr = value.toString();
  for(let i = 0; i < valueStrLen; i++) {
    sum += Math.pow(+valStr[i],valueStrLen)
  }
  if(sum == value) {
    return true
  }
  else {
     return false
  }
}

console.log(narcissistic(153));