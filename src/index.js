import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drinks = [['Lemonade', 99], ['Lime', 79]];
const newDrinks = ['Peach', 89];

// const merged = drinks.concat(newDrinks);
const merged = [ ...drinks, newDrinks ];

console.log(merged);
console.log(drinks);
console.log(newDrinks);
