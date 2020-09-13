// Problem Statement: https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  var alphabets = "abcdefghijklmnopqrstuvwxyz";
  var obj = {};
  var result = '';
  var transformText = text.toLowerCase();
  
  for(var i = 0; i < alphabets.length; i++) {
    obj[alphabets[i]] = i+1;
  }
  
  for(var j = 0; j < transformText.length; j++) {
    if(alphabets.includes(transformText[j])) {
        result += obj[transformText[j]] + " ";
    }
  }
  result = result.slice(0,-1);
  return result;
}

console.log(alphabetPosition("Aakash Gill"));