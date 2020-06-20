// Problem Statement: https://www.codewars.com/kata/53697be005f803751e0015aa

function encode(string) {
  return string.replace(/a/ig, 1)
    .replace(/e/ig, 2)
    .replace(/i/ig, 3)
    .replace(/o/ig, 4)
    .replace(/u/ig, 5);
}
function decode(string) {
  return string.replace(/1/ig, 'a')
    .replace(/2/ig, 'e')
    .replace(/3/ig, 'i')
    .replace(/4/ig, 'o')
    .replace(/5/ig, 'u');
}

console.log(encode('JavascriptIsFun'));
console.log(decode('J1v1scr3pt3sF5n'));