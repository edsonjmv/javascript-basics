import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

const carPartId = (id => {
  const theId = `CAR_PART_${id}`;
  return name => `${theId}_${name}`;
})('x7H8sFf');

console.log(carPartId('Left Door'));
console.log(carPartId('Right Door'));
console.log(carPartId('Windscreen'));
