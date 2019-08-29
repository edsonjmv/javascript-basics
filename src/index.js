import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drinks = ['Lemonade', 'Lime', 'Peach'];

// beginning
console.log([ 'Water', ...drinks ]); //immutable
drinks.unshift('Water'); // mutable

// middle
const index = 1;
console.log([
  ...drinks.splice(0, index),
  'Mojito',
  ...drinks.splice(index - 1)
]); //immutable
drinks.splice(index, 0, 'Cola'); // mutable

// end
console.log([ ...drinks, 'Beer' ]); //immutable
drinks.push('Beer'); // mutable

console.log(drinks);
