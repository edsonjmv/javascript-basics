import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

// hoisting
console.log(makeCar); // function makeCar() { console.log('Making car...'); }
console.log(makeCarExpression); // undefined
console.log(makeCarArrow); // undefined
console.log(makeCarArrowShorthand); // undefined

// 1: Function Declaration
function makeCar() {
  console.log('Making car...');
}

makeCar();

// 2: Function Expression (anonymous or named)
const makeCarExpression = function () {};

console.log(makeCarExpression);

// 3: Arrow Function
const makeCarArrow = () => {
  console.log('Making car inside Arrow...');
};

makeCarArrow();

const makeCarArrowShorthand = () => console.log('Short');

makeCarArrowShorthand();
