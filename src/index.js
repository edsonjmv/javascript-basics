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

Object.keys(drink).forEach(prop => {
  console.log(prop);
  console.log(drink[prop]);
})

console.log(Object.entries(drink));

console.log(drink);
