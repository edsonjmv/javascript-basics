import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

console.log(Number.prototype);

console.log((99.12345678).toFixed(2)); // 99.12
console.log((99.12345678).toFixed(4)); // 99.1235
console.log((99).toFixed(4)); // 99.0000

// console.log(99.toFixed(4)); // gives error because the number is not wrapped

console.log(99..toFixed(4)); // 99.0000

console.log(44.55.toFixed()); // 45