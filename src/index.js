import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

console.log(typeof []); // object
console.log([] instanceof Array); // true
console.log(new Array() instanceof Array); // true
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
console.log(Object.prototype.toString.call([])); // [object Array]
