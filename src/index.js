import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drinks = ['Lemonade', 'Lime', 'Peach'];
const drinksReference = drinks;

console.log(drinks);
console.log(drinks === drinksReference); // true
console.log([] === []); // false
console.log(new Array('Lemonade', 'Lime', 'Peach'));
console.log(Array('Lemonade', 'Lime', 'Peach'));
