import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const id = 'xhs8Pla';
const name = 'Lemonade';
const price = 99;

const someKey = 'name';

const drink = {
  id,
  [someKey]: name,
  price,
  getDrinkDetails() {
    return `Drink ${this.name} (${this.price})`;
  },
  'abc 123': 'I am the value!',
  100: 'I am a number!'
};

console.log(drink);
