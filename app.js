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

function generateRandom(obj, array) {
  array.push('Generated sales for ' + obj.name + ':');
  for (var i = 6; i < 12; i++) {
    var randomCust = Math.floor(Math.random() * (obj.max - obj.min) + obj.min);
    array.push(i + 'am: ' + (randomCust * obj.avgCust) + ' cookies');
  }

  array.push('12pm: ' + (randomCust * obj.avgCust) + ' cookies');
  var i = 1;
  for (var i = 1; i < 9; i++) {
    var randomCust = Math.floor(Math.random() * (obj.max - obj.min) + obj.min);
    array.push(i + 'pm: ' + (randomCust * obj.avgCust) + ' cookies');
  }
  return[array];
}

generateRandom(firstAndPike, salesFirstAndPike);
generateRandom(seaTacAirport, salesSeaTacAirport);
generateRandom(seattleCenter, salesSeattleCenter);
generateRandom(capitolHill, salesCapitolHill);
generateRandom(alki, salesAlki);
