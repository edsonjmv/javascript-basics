import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drinks = [['Lemonade', 99], ['Lime', 79], ['Peach', 89]];

const [ drinkOne, [a, b], ...rest ] = drinks;

console.log(drinkOne);
console.log(a, b);
console.log(rest);

console.log(drinks);
