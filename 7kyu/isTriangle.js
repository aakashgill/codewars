// Problem Statement: https://www.codewars.com/kata/56606694ec01347ce800001b

function is_triangle(a, b, c) {
  return ((a + b > c ) && (a + c > b) && (b + c > a))
}

console.log(is_triangle(20,10,11))