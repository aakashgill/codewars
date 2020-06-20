// Problem Statement: https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
  var newPoplution = p0;
  var years = 0;
  while(newPoplution < p) {
    var totalPopulation = newPoplution + (newPoplution * (percent / 100)) + aug;
    newPoplution = totalPopulation;
    years++;
  }
   return years;
}

console.log(nbYear(1500, 5, 100, 5000));