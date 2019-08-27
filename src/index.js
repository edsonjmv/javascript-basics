import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drink = {
  id: 'xhs8Pla',
  name: 'Lemonade'
};

const price = {
  sale: 99,
  full: 129
}

// const mergedDrink = Object.assign({}, drink, { price });
const mergedDrink = { ...drink, ...{ price } };

console.log(drink, price);
console.log(mergedDrink);
