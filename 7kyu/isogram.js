// Problem statement: https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str){
  var splitArr = str.toLowerCase().split('');
  var newArr = [];

  for(var i = 0; i < splitArr.length; i++) {
    if(newArr.includes(splitArr[i])) {
      return false;
    }
    else {
      newArr.push(splitArr[i])
    }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics"));