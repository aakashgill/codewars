// Problem Statement: https://www.codewars.com/kata/539ee3b6757843632d00026b
var capitals = function (word) {
  let result = [];
    for(let i = 0; i < word.length; i++) {
       let checkCapital = word[i] == word[i].toUpperCase();
      if(checkCapital) {
        result.push(word.indexOf(word[i]));
      }
    }
  return result;
};

console.log(capitals("CodEWaRs"));