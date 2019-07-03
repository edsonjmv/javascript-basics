import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const number = 99;
let result;

switch (number) {
  case 1:
    result = 'One';
    break;
  case 99:
    result = 'Ninety-Nine';
    break;
  case 1000:
    result = 'One Thousand';
    break;
  default:
    result = 'No Match';
}

console.log(result);
