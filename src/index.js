import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(100 / 3); // 33.333333333333336

const price = 9.33;
const quantity = 3;
console.log(price * quantity); // 27.990000000000002

const anotherPrice = 9.33 * 100;
const anotherQuantity = 3;
console.log(anotherPrice * anotherQuantity / 100); // 27.99