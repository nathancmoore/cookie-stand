'use strict';

var salesFirstAndPike = [];
var salesSeaTacAirport = [];
var salesSeattleCenter = [];
var salesCapitolHill = [];
var salesAlki = [];

var randomCust = 0;

var firstAndPike = {
  name: 'First and Pike',
  min: 23,
  max: 65,
  avgCust: 6.3,
  generateRandomFirstAndPike: function() {
    var totalsales = 0;
    var body = document.getElementsByTagName('body')[0];
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');
    body.appendChild(h2);
    h2.innerText = this.name;
    body.appendChild(ul);
    for (var i = 6; i < 12; i++) {
      randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
      var sales = Math.round(randomCust * this.avgCust);
      totalsales += sales;
      console.log(totalsales, sales);
      salesFirstAndPike.push(i + 'am: ' + sales + ' cookies');
      var li = document.createElement('li');
      ul.appendChild(li);
      li.innerText = salesFirstAndPike[i - 6];
    }
    var sales = Math.round(randomCust * this.avgCust);
    var totalsales = (totalsales + sales);
    salesFirstAndPike.push('12pm: ' + sales + ' cookies');
    var newLi = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesFirstAndPike[6];

    for (i = 1; i < 9; i++) {
      randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
      var sales = Math.round(randomCust * this.avgCust);
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
  },

};

firstAndPike.generateRandomFirstAndPike();

var seaTacAirport = {
  name: 'SeaTacAirport',
  min: 3,
  max: 24,
  avgCust: 1.2,
  generateRandomSeaTacAirport: function() {
    var totalsales = 0;
    var body = document.getElementsByTagName('body')[0];
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');
    body.appendChild(h2);
    h2.innerText = this.name;
    body.appendChild(ul);
    for (var i = 6; i < 12; i++) {
      randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
      var sales = Math.round(randomCust * this.avgCust);
      totalsales += sales;
      console.log(totalsales, sales);
      salesSeaTacAirport.push(i + 'am: ' + sales + ' cookies');
      var li = document.createElement('li');
      ul.appendChild(li);
      li.innerText = salesSeaTacAirport[i - 6];
    }
    var sales = Math.round(randomCust * this.avgCust);
    var totalsales = (totalsales + sales);
    salesSeaTacAirport.push('12pm: ' + sales + ' cookies');
    var newLi = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesSeaTacAirport[6];

    for (i = 1; i < 9; i++) {
      randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
      var sales = Math.round(randomCust * this.avgCust);
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
  },
};

seaTacAirport.generateRandomSeaTacAirport();

var seattleCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCust: 3.7,
  generateRandomSeattleCenter: function() {
    var totalsales = 0;
    var body = document.getElementsByTagName('body')[0];
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');
    body.appendChild(h2);
    h2.innerText = this.name;
    body.appendChild(ul);
    for (var i = 6; i < 12; i++) {
      randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
      var sales = Math.round(randomCust * this.avgCust);
      totalsales += sales;
      console.log(totalsales, sales);
      salesSeattleCenter.push(i + 'am: ' + sales + ' cookies');
      var li = document.createElement('li');
      ul.appendChild(li);
      li.innerText = salesSeattleCenter[i - 6];
    }
    var sales = Math.round(randomCust * this.avgCust);
    var totalsales = (totalsales + sales);
    salesSeattleCenter.push('12pm: ' + sales + ' cookies');
    var newLi = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesSeattleCenter[6];

    for (i = 1; i < 9; i++) {
      randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
      var sales = Math.round(randomCust * this.avgCust);
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
  },
};

seattleCenter.generateRandomSeattleCenter();

var capitolHill = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCust: 2.3,
  generateRandomCapitolHill: function() {
    var totalsales = 0;
    var body = document.getElementsByTagName('body')[0];
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');
    body.appendChild(h2);
    h2.innerText = this.name;
    body.appendChild(ul);
    for (var i = 6; i < 12; i++) {
      randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
      var sales = Math.round(randomCust * this.avgCust);
      totalsales += sales;
      console.log(totalsales, sales);
      salesAlki.push(i + 'am: ' + sales + ' cookies');
      var li = document.createElement('li');
      ul.appendChild(li);
      li.innerText = salesAlki[i - 6];
    }
    var sales = Math.round(randomCust * this.avgCust);
    var totalsales = (totalsales + sales);
    salesAlki.push('12pm: ' + sales + ' cookies');
    var newLi = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesAlki[6];

    for (i = 1; i < 9; i++) {
      randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
      var sales = Math.round(randomCust * this.avgCust);
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
  },
};

capitolHill.generateRandomCapitolHill();

var alki = {
  name: 'Alki',
  min: 2,
  max: 16,
  avgCust: 4.6,
  generateRandomAlki: function() {
    var totalsales = 0;
    var body = document.getElementsByTagName('body')[0];
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');
    body.appendChild(h2);
    h2.innerText = this.name;
    body.appendChild(ul);
    for (var i = 6; i < 12; i++) {
      randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
      var sales = Math.round(randomCust * this.avgCust);
      totalsales += sales;
      console.log(totalsales, sales);
      salesAlki.push(i + 'am: ' + sales + ' cookies');
      var li = document.createElement('li');
      ul.appendChild(li);
      li.innerText = salesAlki[i - 6];
    }
    var sales = Math.round(randomCust * this.avgCust);
    var totalsales = (totalsales + sales);
    salesAlki.push('12pm: ' + sales + ' cookies');
    var newLi = document.createElement('li');
    ul.appendChild(li);
    li.innerText = salesAlki[6];

    for (i = 1; i < 9; i++) {
      randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
      var sales = Math.round(randomCust * this.avgCust);
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
  },
};

alki.generateRandomAlki();
