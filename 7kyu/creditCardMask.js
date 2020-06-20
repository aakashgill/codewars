// Problem Statement: https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
  var result = '';
  var increment = 0;
  for(var i = 0; i < cc.length - 4; i++) {
    result += "#"
    increment++
  }
  for(var j = increment; j < cc.length; j++) {
    result += cc[j];
  }
  return result;
}

console.log(maskify("1133101339"));