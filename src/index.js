import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const result = Number('55px');

// isNaN "NaN"
console.log(isNaN(result)); // true
console.log(isNaN('I am a String')); // true

console.log(Number.isNaN(result)); // true
console.log(Number.isNaN('I am another String')); // false

console.log(Number.isInteger(66)); // true
console.log(Number.isInteger(.99)); // false