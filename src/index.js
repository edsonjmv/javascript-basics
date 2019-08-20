import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

function makeCarPrice(...params) {
  return params.reduce((prev, next) => prev + next);
}

const makeCarPriceArrow = (...params) => params.reduce((prev, next) => prev + next);

console.log(`Total: ${makeCarPrice(11, 22, 33, 44, 55, 66)}`);

console.log(`Total: ${makeCarPriceArrow(11, 22, 33, 44, 55, 66)}`);
