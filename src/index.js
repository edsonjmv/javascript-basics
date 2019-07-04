import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const immutableNumber = 99;
let referencedNumber = immutableNumber;

referencedNumber = 44;

console.log(immutableNumber); // 99
console.log(referencedNumber); // 44