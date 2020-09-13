// Problem Statement: https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {
  let missingProperty = false;
  let totalCakes = [];
  
  for(let i in recipe) {
    if(!available.hasOwnProperty(i)) {
      missingProperty = true;
      return 0;
    }
  }
  for(let i in recipe) {
    if(available[i] < recipe[i]) {
      return 0;
    }
  }
  
  for(let i in recipe) {
    let val = parseInt(available[i] / recipe[i]);
    totalCakes.push(val);
  }
  return Math.min(...totalCakes);
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));