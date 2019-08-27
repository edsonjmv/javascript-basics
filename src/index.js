import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drink = {
  id: 'xhs8Pla',
  name: 'Lemonade',
  price: {
    sale: 99,
    full: 129
  }
};

function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

console.log(typeof drink); // object
console.log(typeof []); // object
console.log(typeof null); // object

console.log({} instanceof Object); // true
console.log([] instanceof Object); // true
console.log(null instanceof Object); // false

console.log(getType(drink)); // object
console.log(getType(null)); // null
console.log(getType([])); // array
