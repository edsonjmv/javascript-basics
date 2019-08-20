import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

// old way
function makeCarPrice() {
  console.log(arguments);
  const total = Array.from(arguments).reduce((prev, next) => prev + next);
  console.log(`Total: ${total}USD`);
}

makeCarPrice(11, 44, 55, 99, 66);

//new way (rest parameters)
function makeCarPriceRest(...params) {
  const total = params.reduce((prev, next) => prev + next);
  console.log(`Total: ${total}USD`);
}

makeCarPriceRest(99, 88, 77, 11, 44);