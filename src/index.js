import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

console.log(typeof 99); // number

console.log(99 instanceof Number); // false
console.log(Number('99') instanceof Number); // false
console.log(new Number('99') instanceof Number); // true
console.log({}.toString()); // [object Object]
console.log(Object.prototype.toString.call(99)); // [object Number]
console.log(Object.prototype.toString.call(99) === '[object Number]'); // true
console.log(Object.prototype.toString.call(99).slice(8, -1) === 'Number'); // true