'use strict';

var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var allProducts = [];
var container = document.getElementById('image_container');
var viewed = [];
var labels = [];
var pics = [document.getElementById('left'),
                document.getElementById('center'), //eslint-disable-line
                document.getElementById('right')]; //eslint-disable-line
var list = document.getElementById('productlist');
var totalClicks = 0;
var views = [];
var votes = [];

function Product(name) {
  this.name = name;
  this.path = 'img/${name}.jpg';
  this.votes = 0;
  this.views = 0;
  allProducts.push(this);
}

function makeRandom() {
  return Math.floor(Math.random() * names.length);
}

function displayPics(){
  // roll for three random indexes
  while(viewed.length < 6){
    var rando = makeRandom();
    while(!viewed.includes(rando)){
      viewed.push(rando);
    }
  }
  console.log(rando);
  // TODO: In a sentence or two, explain why the previous line of code threw an error when we changed the variable declaration from `var to `let`.
  // You set the variable inside the while loop and then try to use it outside of that loop.
  console.log(viewed);

  // To the DOM and beyond!
  for (var i = 0; i < 3; i++){
    var temp = viewed.shift();
    pics[i].src = allProducts[temp].path;
    pics[i].id = allProducts[temp].name;
    allProducts[temp].views += 1;
  }
}

function handleClick(event) {
  if (event.target.id === 'image_container') {
    return alert('Be sure to click directly on an image!!');
  }
  totalClicks += 1;
  if(totalClicks > 24) {
    container.removeEventListener('click', handleClick);
    container.style.display = 'none';
    showList();
    makeChart();
  }
  for(var i = 0; i < names.length; i++){
    if(event.target.id === allProducts[i].name) {
      allProducts[i].votes += 1;
      console.log('${event.target.id} has ${allProducts[i].votes} votes in ${allProducts[i].views} views');
    }
  }
  localStorage.busmall = JSON.stringify(allProducts);
  localStorage.busmallProducts = JSON.stringify(allProducts);
  displayPics();
}

function showList() {
  for(var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = '${allProducts[i].name} has ${allProducts[i].votes} votes in ${allProducts[i].views} views';
    list.appendChild(liEl);
  }
}

function makeChartData(){
  allProducts.forEach(function(product){
    labels.push(product.name);
    votes.push(product.votes);
    views.push(product.views);
  });
}

function makeChart(){
  makeChartData();
  var ctx = document.getElementById('chartypants').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'total votes',
        backgroundColor: 'gold',
        borderColor: '#214',
        data: votes,
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            max: 20,
            min: 0,
            stepSize: 1
          }
        }]
      }
    }
  });
  Chart.defaults.global.defaultFontColor = '#eee';
}

container.addEventListener('click', handleClick);

document.getElementById('bus').addEventListener('click', function(){
  localStorage.removeItem('busmall');
  console.log('Local storage was cleared!');
});

if(localStorage.busmall){
  console.log('Local storage data exists');
  allProducts = JSON.parse(localStorage.busmall);
} else {
  console.log('There is no local storage data; initialize app by creating instances');
  for(var i = 0; i < names.length; i++) {
    new Product(names[i]);
  }
  console.log(allProducts);
}

displayPics();
