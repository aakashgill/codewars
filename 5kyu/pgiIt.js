function pigIt(str){
  var arr = str.split(" ");
  var transformedArr = arr.map((word) => {
    if(word != "?" && word != "!") {
      return word.slice(1) + word[0] + "ay"; 
    }
    return word;
  });
  return transformedArr.join(" ");
}

console.log(pigIt("Every Letter Has 'Ay' in end"));