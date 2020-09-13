// Problem Statement: https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
  var result = '';
  for(var i = 0; i < string.length; i++) {
    if(string[i] == string[i].toUpperCase()) {
        result += ' ';
    }
    result += string[i];
  }
  return result;
}