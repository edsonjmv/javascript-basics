import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

function makeCarPartID(id) {
  const theId = `CAR_PART_${id}`;
  return name => `${theId}_${name.toUpperCase()}`;
}

const carPartId = makeCarPartID('x8YdsZ12');
console.log(carPartId('Left Door'));
console.log(carPartId('Right Door'));
console.log(carPartId('Windscreen'));

const anotherCarPartId = makeCarPartID('7hs9zSaq0');
console.log(anotherCarPartId('Left Door'));
console.log(anotherCarPartId('Right Door'));
console.log(anotherCarPartId('Windscreen'));
