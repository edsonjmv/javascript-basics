import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----
console.log(true, false);

const arg = 'X';
console.log(Boolean(arg)); // true
console.log(!!arg); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

console.log(new Boolean(arg));

console.log(typeof true); // boolean
console.log(typeof false); // boolean

console.log(true instanceof Boolean); // false
console.log(new Boolean('X') instanceof Boolean); // true
console.log(Object.prototype.toString.call(true)); // [object Boolean]
