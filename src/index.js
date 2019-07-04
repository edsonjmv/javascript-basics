import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

//literal
const literalNumber = '99';
console.log(literalNumber);

// function syntax
// perform a type-conversion in a non-constructor context
console.log(Number('55'));
console.log(Number('44px'));

// constructor syntax, creates a wrapper Object
// avoid using it
console.log(new Number(66));
