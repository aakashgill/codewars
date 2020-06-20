// Problem Statement: https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers){
  const evenArray = [];
  const oddArray = [];

 for(let i = 0; i < integers.length; i++) {
   if(integers[i] % 2 == 0) {
     evenArray.push(integers[i]);
   }
   else {
    oddArray.push(integers[i]);
   }
 } 
  if(evenArray.length > oddArray.length) {
     return oddArray[0];
   }
  else {
    return evenArray[0]
  }
}

console.log(findOutlier([2,6,8,10,3]));