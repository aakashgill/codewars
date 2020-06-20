// Problem statement: https://www.codewars.com/kata/50654ddff44f800200000004

function multiply(a, b){
  return (isNaN(a) || isNaN(b)) ? 'Wrong input' : a * b
}
console.log(multiply(10, 10));