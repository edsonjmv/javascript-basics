import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drinks = [
  { name: 'Lemonade', price: 99 },
  { name: 'Lime', price: 79 },
  { name: 'Peach', price: 89 },
]

console.log(drinks.reverse());

// sort lowest to highest
console.log(drinks.sort((a, b) => a.price - b.price));

// sort highest to lowest
console.log(drinks.sort((a, b) => b.price - a.price));
