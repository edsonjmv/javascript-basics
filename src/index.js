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

console.log(drink);

const id = 1234;

const myDrinkId = drink.id;
const myDrinkName = drink.name;
const myDrinkSalePrice = drink.price.sale;
console.log(myDrinkId);
console.log(myDrinkName);
console.log(myDrinkSalePrice);

const {
  id: myId,
  price: { full },
  ...rest
} = drink;
console.log(id, myId, full, rest);

const { sale } = drink.price;
console.log(sale);
