import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drinks = ['Lemonade', 'Lime', 'Peach'];

// beginning
const removed = drinks.shift();
console.log(removed);

// end
const removed_ = drinks.pop();
console.log(removed_);

// slice = anywhere
const index = drinks.length - 1;
const newDrinks = [ ...drinks.slice(0, index), ...drinks.slice(index + 1) ];

console.log(newDrinks);

console.log(drinks);
