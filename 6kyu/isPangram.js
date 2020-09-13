// Problem Statement: https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
  let convertedString = string.toLowerCase();
  let result = false;
  const letters = "abcdefghijklmnopqrstuvwxyz";
  
  if(convertedString.length < 26) {
    return false;
  }
  
  for(let i = 0; i < letters.length; i++) {
    if(convertedString.includes(letters[i])) {
      result = true;
    }
    else {
      return false;
    }
  }
  return result;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));