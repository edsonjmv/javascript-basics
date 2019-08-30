import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drinks = [['Lemonade', 99], ['Lime', 79], ['Peach', 89]];

// Mutable - Shallow cloning
// const drinksClone = [ ...drinks ];
// const drinksClone = drinks.slice();
// const drinksClone = Array.from(drinks);

// Immutable - Deep cloning
const drinksClone = JSON.parse(JSON.stringify(drinks));

drinksClone[0][1] = 1000;

console.log(drinksClone);

console.log(drinks);
