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

const drinkWithId = Object.create(drink);
drinkWithId.id = 'xhs8Pla';
console.log(drinkWithId);

console.log('name' in drinkWithId);

for (const prop in drinkWithId) {
  if (drinkWithId.hasOwnProperty(prop)) {
    console.log(prop, drinkWithId[prop]);
  }
}

console.log('-----');

console.log(drink);

// for..in
for (const prop in drink) {
  const value = drink[prop];
  if (Object.prototype.toString.call(value) === '[object Object]') {
    for (const key in value) {
      console.log(key);
    }
  }
}
