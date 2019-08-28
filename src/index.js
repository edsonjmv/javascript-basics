import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drinks = [['Lemonade', 99], ['Lime', 79], ['Peach', 89]];

const drinkOne = drinks[0];
const drinkTwo = drinks[1];

console.log(`Drink: ${drinkOne[0]}, Price: ${drinkOne[1]}$`);
console.log(`Drink: ${drinkTwo[0]}, Price: ${drinkTwo[1]}$`);
console.log(`Drink: ${drinks[2][0]}, Price: ${drinks[2][1]}$`);

console.log(drinks);
