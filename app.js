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
  var totalsales = 0;
  var body = document.getElementsByTagName('body')[0];
  var ul = document.createElement('ul');
  body.appendChild(ul);
  salesFirstAndPike.push('Generated sales for ' + firstAndPike.name + ':');
  for (var i = 6; i < 12; i++) {
    randomCust = Math.floor(Math.random() * (firstAndPike.max - firstAndPike.min) + firstAndPike.min);
    var sales = Math.round(randomCust * firstAndPike.avgCust);
    totalsales += sales;
    console.log(totalsales, sales);
    salesFirstAndPike.push(i + 'am: ' + sales + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesFirstAndPike[i - 6];
  }
  var sales = Math.round(randomCust * firstAndPike.avgCust);
  var totalsales = (totalsales + sales);
  salesFirstAndPike.push('12pm: ' + sales + ' cookies');
  var newLi = document.createElement('li');
  ul.appendChild(li);
  li.innerText = salesFirstAndPike[6];

  for (i = 1; i < 9; i++) {
    randomCust = Math.floor(Math.random() * (firstAndPike.max - firstAndPike.min) + firstAndPike.min);
    var sales = Math.round(randomCust * firstAndPike.avgCust);
    var totalsales = (totalsales + sales);
    salesFirstAndPike.push(i + 'pm: ' + sales + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesFirstAndPike[i + 6];
  }

  var li = document.createElement('li');
  ul.appendChild(li);
  li.innerText = 'Total: ' + totalsales + ' cookies';
  return[salesFirstAndPike];
}
generateRandomFirstAndPike();
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

function generateRandomSeaTacAirport() {
  var totalsales = 0;
  var body = document.getElementsByTagName('body')[0];
  var ul = document.createElement('ul');
  body.appendChild(ul);
  salesSeaTacAirport.push('Generated sales for ' + seaTacAirport.name + ':');
  for (var i = 6; i < 12; i++) {
    randomCust = Math.floor(Math.random() * (seaTacAirport.max - seaTacAirport.min) + seaTacAirport.min);
    var sales = Math.round(randomCust * seaTacAirport.avgCust);
    totalsales += sales;
    console.log(totalsales, sales);
    salesSeaTacAirport.push(i + 'am: ' + sales + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesSeaTacAirport[i - 6];
  }
  var sales = Math.round(randomCust * seaTacAirport.avgCust);
  var totalsales = (totalsales + sales);
  salesSeaTacAirport.push('12pm: ' + sales + ' cookies');
  var newLi = document.createElement('li');
  ul.appendChild(li);
  li.innerText = salesSeaTacAirport[6];

  for (i = 1; i < 9; i++) {
    randomCust = Math.floor(Math.random() * (seaTacAirport.max - seaTacAirport.min) + seaTacAirport.min);
    var sales = Math.round(randomCust * seaTacAirport.avgCust);
    var totalsales = (totalsales + sales);
    salesSeaTacAirport.push(i + 'pm: ' + sales + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesSeaTacAirport[i + 6];
  }

  var li = document.createElement('li');
  ul.appendChild(li);
  li.innerText = 'Total: ' + totalsales + ' cookies';
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
  var totalsales = 0;
  var body = document.getElementsByTagName('body')[0];
  var ul = document.createElement('ul');
  body.appendChild(ul);
  salesSeattleCenter.push('Generated sales for ' + seattleCenter.name + ':');
  for (var i = 6; i < 12; i++) {
    randomCust = Math.floor(Math.random() * (seattleCenter.max - seattleCenter.min) + seattleCenter.min);
    var sales = Math.round(randomCust * seattleCenter.avgCust);
    totalsales += sales;
    console.log(totalsales, sales);
    salesSeattleCenter.push(i + 'am: ' + sales + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesSeattleCenter[i - 6];
  }
  var sales = Math.round(randomCust * seattleCenter.avgCust);
  var totalsales = (totalsales + sales);
  salesSeattleCenter.push('12pm: ' + sales + ' cookies');
  var newLi = document.createElement('li');
  ul.appendChild(li);
  li.innerText = salesSeattleCenter[6];

  for (i = 1; i < 9; i++) {
    randomCust = Math.floor(Math.random() * (seattleCenter.max - seattleCenter.min) + seattleCenter.min);
    var sales = Math.round(randomCust * seattleCenter.avgCust);
    var totalsales = (totalsales + sales);
    salesSeattleCenter.push(i + 'pm: ' + sales + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesSeattleCenter[i + 6];
  }

  var li = document.createElement('li');
  ul.appendChild(li);
  li.innerText = 'Total: ' + totalsales + ' cookies';
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
  var totalsales = 0;
  var body = document.getElementsByTagName('body')[0];
  var ul = document.createElement('ul');
  body.appendChild(ul);
  salesCapitolHill.push('Generated sales for ' + capitolHill.name + ':');
  for (var i = 6; i < 12; i++) {
    randomCust = Math.floor(Math.random() * (capitolHill.max - capitolHill.min) + capitolHill.min);
    var sales = Math.round(randomCust * capitolHill.avgCust);
    totalsales += sales;
    console.log(totalsales, sales);
    salesCapitolHill.push(i + 'am: ' + sales + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesCapitolHill[i - 6];
  }
  var sales = Math.round(randomCust * capitolHill.avgCust);
  var totalsales = (totalsales + sales);
  salesCapitolHill.push('12pm: ' + sales + ' cookies');
  var newLi = document.createElement('li');
  ul.appendChild(li);
  li.innerText = salesCapitolHill[6];

  for (i = 1; i < 9; i++) {
    randomCust = Math.floor(Math.random() * (capitolHill.max - capitolHill.min) + capitolHill.min);
    var sales = Math.round(randomCust * capitolHill.avgCust);
    var totalsales = (totalsales + sales);
    salesCapitolHill.push(i + 'pm: ' + sales + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesCapitolHill[i + 6];
  }

  var li = document.createElement('li');
  ul.appendChild(li);
  li.innerText = 'Total: ' + totalsales + ' cookies';
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
  var totalsales = 0;
  var body = document.getElementsByTagName('body')[0];
  var ul = document.createElement('ul');
  body.appendChild(ul);
  salesAlki.push('Generated sales for ' + alki.name + ':');
  for (var i = 6; i < 12; i++) {
    randomCust = Math.floor(Math.random() * (alki.max - alki.min) + alki.min);
    var sales = Math.round(randomCust * alki.avgCust);
    totalsales += sales;
    console.log(totalsales, sales);
    salesAlki.push(i + 'am: ' + sales + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesAlki[i - 6];
  }
  var sales = Math.round(randomCust * alki.avgCust);
  var totalsales = (totalsales + sales);
  salesAlki.push('12pm: ' + sales + ' cookies');
  var newLi = document.createElement('li');
  ul.appendChild(li);
  li.innerText = salesAlki[6];

  for (i = 1; i < 9; i++) {
    randomCust = Math.floor(Math.random() * (alki.max - alki.min) + alki.min);
    var sales = Math.round(randomCust * alki.avgCust);
    var totalsales = (totalsales + sales);
    salesAlki.push(i + 'pm: ' + sales + ' cookies');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesAlki[i + 6];
  }

  var li = document.createElement('li');
  ul.appendChild(li);
  li.innerText = 'Total: ' + totalsales + ' cookies';
  return[salesAlki];
}
generateRandomAlki();
