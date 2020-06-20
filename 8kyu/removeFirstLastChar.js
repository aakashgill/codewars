// Problem Statement: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str){
  return str.length == 2 ? str : str.slice(1,str.length-1)
};
 
 console.log(removeChar('Some string'))