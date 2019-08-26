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

// slow
// delete drink.id;

drink.id = undefined;

if (drink.id) {
  console.log('Has ID...');
}

console.log(drink.hasOwnProperty('id'));

const { price, ...rest } = drink;

console.log(price, rest);

console.log(drink);
