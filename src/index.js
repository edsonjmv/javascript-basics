import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drinks = ['Lemonade', 'Lime', 'Peach'];

drinks[0] = 'Diet Lemonade';
// drinks['favourite'] = 'Cola';

console.log(drinks);
console.log(drinks[0]);
console.log(drinks[drinks.length - 1]);

// drinks.length = 0;
drinks.splice(0, drinks.length);

console.log(drinks);
