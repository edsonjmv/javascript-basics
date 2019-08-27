import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drink = {
  id: 'xhs8Pla',
  name: 'Lemonade',
  price: {
    sale: 99,
    full: 129
  }
};

// shallow copies
// const drinkClone = Object.assign({}, drink);
// const drinkClone = { ...drink };

// deep copy
const drinkStringified = JSON.stringify(drink);
const drinkClone = JSON.parse(drinkStringified);

drinkClone.id = 'abcd';
drinkClone.price.sale = 79;

console.log(drink);

console.log(drinkClone);
