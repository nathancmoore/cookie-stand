'use strict';

var salesFirstAndPike = [];
var salesSeaTacAirport = [];
var salesSeattleCenter = [];
var salesCapitolHill = [];
var salesAlki = [];

var firstAndPike = {
  name: 'First and Pike',
  min: 23,
  max: 65,
  avgCust: 6.3,
};

function generateRandomFirstAndPike() {
  salesFirstAndPike.push('Generated sales for ' + firstAndPike.name + ':');
  for (var i = 6; i < 12; i++) {
    randomCust = Math.floor(Math.random() * (firstAndPike.max - firstAndPike.min) + firstAndPike.min);
    salesFirstAndPike.push(i + 'am: ' + Math.round(randomCust * firstAndPike.avgCust) + ' cookies');
  }

  salesFirstAndPike.push('12pm: ' + Math.round(randomCust * firstAndPike.avgCust) + ' cookies');
  for (i = 1; i < 9; i++) {
    randomCust = Math.floor(Math.random() * (firstAndPike.max - firstAndPike.min) + firstAndPike.min);
    salesFirstAndPike.push(i + 'pm: ' + Math.round(randomCust * firstAndPike.avgCust) + ' cookies');
  }
  return[salesFirstAndPike];
}
generateRandomFirstAndPike();

var seaTacAirport = {
  name: 'SeaTacAirport',
  min: 3,
  max: 24,
  avgCust: 1.2,
};

var seattleCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCust: 3.7,
};

var capitolHill = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCust: 2.3,
};

var alki = {
  name: 'Alki',
  min: 2,
  max: 16,
  avgCust: 4.6,
};

var randomCust = 0;

// function generateRandom(obj, array) {
//   array.push('Generated sales for ' + obj.name + ':');
//   for (var i = 6; i < 12; i++) {
//     randomCust = Math.floor(Math.random() * (obj.max - obj.min) + obj.min);
//     array.push(i + 'am: ' + Math.round(randomCust * obj.avgCust) + ' cookies');
//   }
//
//   array.push('12pm: ' + Math.round(randomCust * obj.avgCust) + ' cookies');
//   for (i = 1; i < 9; i++) {
//     randomCust = Math.floor(Math.random() * (obj.max - obj.min) + obj.min);
//     array.push(i + 'pm: ' + Math.round(randomCust * obj.avgCust) + ' cookies');
//   }
//   return[array];
// }
//
// generateRandom(firstAndPike, salesFirstAndPike);
// generateRandom(seaTacAirport, salesSeaTacAirport);
// generateRandom(seattleCenter, salesSeattleCenter);
// generateRandom(capitolHill, salesCapitolHill);
// generateRandom(alki, salesAlki);
