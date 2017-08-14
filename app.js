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

var randomCust = 0;

function generateRandomFirstAndPike() {
  var body = document.getElementsByTagName('body')[0];
  var ul = document.createElement('ul');
  body.appendChild(ul);
  salesFirstAndPike.push('Generated sales for ' + firstAndPike.name + ':');
  for (var i = 6; i < 12; i++) {
    randomCust = Math.floor(Math.random() * (firstAndPike.max - firstAndPike.min) + firstAndPike.min);
    salesFirstAndPike.push(i + 'am: ' + Math.round(randomCust * firstAndPike.avgCust) + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesFirstAndPike[i - 6];
  }

  salesFirstAndPike.push('12pm: ' + Math.round(randomCust * firstAndPike.avgCust) + ' cookies');
  var newLi = document.createElement('li');
  ul.appendChild(li);
  li.innerText = salesFirstAndPike[6];

  for (i = 1; i < 9; i++) {
    randomCust = Math.floor(Math.random() * (firstAndPike.max - firstAndPike.min) + firstAndPike.min);
    salesFirstAndPike.push(i + 'pm: ' + Math.round(randomCust * firstAndPike.avgCust) + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesFirstAndPike[i + 6];
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

function generateRandomSeaTacAirport() {
  var body = document.getElementsByTagName('body')[0];
  var ul = document.createElement('ul');
  body.appendChild(ul);
  salesSeaTacAirport.push('Generated sales for ' + seaTacAirport.name + ':');
  for (var i = 6; i < 12; i++) {
    randomCust = Math.floor(Math.random() * (seaTacAirport.max - seaTacAirport.min) + seaTacAirport.min);
    salesSeaTacAirport.push(i + 'am: ' + Math.round(randomCust * seaTacAirport.avgCust) + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesSeaTacAirport[i - 6];
  }

  salesSeaTacAirport.push('12pm: ' + Math.round(randomCust * seaTacAirport.avgCust) + ' cookies');
  var newLi = document.createElement('li');
  ul.appendChild(li);
  li.innerText = salesSeaTacAirport[6];

  for (i = 1; i < 9; i++) {
    randomCust = Math.floor(Math.random() * (seaTacAirport.max - seaTacAirport.min) + seaTacAirport.min);
    salesSeaTacAirport.push(i + 'pm: ' + Math.round(randomCust * seaTacAirport.avgCust) + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesSeaTacAirport[i + 6];
  }
  return[salesSeaTacAirport];
}
generateRandomSeaTacAirport();

var seattleCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCust: 3.7,
};

function generateRandomSeattleCenter() {
  var body = document.getElementsByTagName('body')[0];
  var ul = document.createElement('ul');
  body.appendChild(ul);
  salesSeattleCenter.push('Generated sales for ' + seattleCenter.name + ':');
  for (var i = 6; i < 12; i++) {
    randomCust = Math.floor(Math.random() * (seattleCenter.max - seattleCenter.min) + seattleCenter.min);
    salesSeattleCenter.push(i + 'am: ' + Math.round(randomCust * seattleCenter.avgCust) + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesSeattleCenter[i - 6];
  }

  salesSeattleCenter.push('12pm: ' + Math.round(randomCust * seattleCenter.avgCust) + ' cookies');
  var newLi = document.createElement('li');
  ul.appendChild(li);
  li.innerText = salesSeattleCenter[6];

  for (i = 1; i < 9; i++) {
    randomCust = Math.floor(Math.random() * (seattleCenter.max - seattleCenter.min) + seattleCenter.min);
    salesSeattleCenter.push(i + 'pm: ' + Math.round(randomCust * seattleCenter.avgCust) + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesSeattleCenter[i + 6];
  }
  return[salesSeattleCenter];
}
generateRandomSeattleCenter();

var capitolHill = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCust: 2.3,
};

function generateRandomCapitolHill() {
  var body = document.getElementsByTagName('body')[0];
  var ul = document.createElement('ul');
  body.appendChild(ul);
  salesCapitolHill.push('Generated sales for ' + capitolHill.name + ':');
  for (var i = 6; i < 12; i++) {
    randomCust = Math.floor(Math.random() * (capitolHill.max - capitolHill.min) + capitolHill.min);
    salesCapitolHill.push(i + 'am: ' + Math.round(randomCust * capitolHill.avgCust) + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesCapitolHill[i - 6];
  }

  salesCapitolHill.push('12pm: ' + Math.round(randomCust * capitolHill.avgCust) + ' cookies');
  var newLi = document.createElement('li');
  ul.appendChild(li);
  li.innerText = salesCapitolHill[6];

  for (i = 1; i < 9; i++) {
    randomCust = Math.floor(Math.random() * (capitolHill.max - capitolHill.min) + capitolHill.min);
    salesCapitolHill.push(i + 'pm: ' + Math.round(randomCust * capitolHill.avgCust) + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesCapitolHill[i + 6];
  }
  return[salesCapitolHill];
}
generateRandomCapitolHill();

var alki = {
  name: 'Alki',
  min: 2,
  max: 16,
  avgCust: 4.6,
};

function generateRandomAlki() {
  var body = document.getElementsByTagName('body')[0];
  var ul = document.createElement('ul');
  body.appendChild(ul);
  salesAlki.push('Generated sales for ' + alki.name + ':');
  for (var i = 6; i < 12; i++) {
    randomCust = Math.floor(Math.random() * (alki.max - alki.min) + alki.min);
    salesAlki.push(i + 'am: ' + Math.round(randomCust * alki.avgCust) + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesAlki[i - 6];
  }

  salesAlki.push('12pm: ' + Math.round(randomCust * alki.avgCust) + ' cookies');
  var newLi = document.createElement('li');
  ul.appendChild(li);
  li.innerText = salesAlki[6];

  for (i = 1; i < 9; i++) {
    randomCust = Math.floor(Math.random() * (alki.max - alki.min) + alki.min);
    salesAlki.push(i + 'pm: ' + Math.round(randomCust * alki.avgCust) + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesAlki[i + 6];
  }
  return[salesAlki];
}
generateRandomAlki();
