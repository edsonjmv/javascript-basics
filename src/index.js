import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const number = 99;

const result =
  number === 1
    ? 'One'
    : number === 99
    ? 'Ninety-Nine'
    : number === 1000
    ? 'One thousand'
    : 'No match'

console.log(result);
