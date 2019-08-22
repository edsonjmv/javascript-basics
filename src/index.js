import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

function carPartId(name, fn) {
  const theId = `Car_Part_x8z0s2`;
  return fn(`${theId}_${name}`);
}

const carPart = carPartId('Left Door', function (id) {
  return `Car Part ID: ${id}`;
});

console.log(carPart);
