import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drink = {
  id: 'xhs8Pla',
  name: 'Lemonade',
  price: 99
};

const drinkReference = drink;
drinkReference.name = 'Peach';

console.log(drink === drinkReference);

console.log({} instanceof Object);
console.log(new Object() instanceof Object);
console.log(Object() instanceof Object);
