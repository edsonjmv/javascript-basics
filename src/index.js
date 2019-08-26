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

// value exists

if (drink.id) {
  console.log(drink.id);
}

for (const prop in drink) {
  if(drink[prop] === 'Lemonade') {
    console.log(prop);
  }
}

const hasLemonade = Object.values(drink).includes('Lemonade');
console.log(hasLemonade);

// property exists

console.log(drink.hasOwnProperty('name'));
console.log(Object.prototype.hasOwnProperty.call(drink, 'name'));
console.log(Object.keys(drink).includes('name'));
