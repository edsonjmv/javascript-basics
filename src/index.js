import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const drink = {
  id: 'xhs8Pla',
  name: 'Lemonade',
  price: 99,
  getDrinkDetails() {
    return `Drink ${this.name} (${this.price})`;
  },
  'abc 123': 'I am the value!',
  100: 'I am a number!'
};

const myId = 'id';

console.log(drink[myId]);
console.log(drink.getDrinkDetails());
console.log(drink['abc 123']);
console.log(drink[100]);
