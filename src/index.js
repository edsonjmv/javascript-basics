import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const firstCar = { id: 'x8KszK0' };
const secondCar = { id: 'bc90slqa' };
const thirdCar = { id: 'h9sNsa' };

function carPartId(name, quantity) {
  console.log(`${this.id}_${name}_${quantity}`);
}

const boundThirdCar = carPartId.bind(thirdCar);
boundThirdCar('Windscreen', 99);
boundThirdCar('Exhaust', 9);

// call = c = commas
carPartId.call(firstCar, 'Left Door', 12);

// apply = a = array
carPartId.apply(secondCar, ['Right Door', 21]);
