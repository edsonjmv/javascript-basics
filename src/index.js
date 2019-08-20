import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

// name = parameter
function makeCar(name = 'Porsche') {
  console.log(`Making car: ${name.toUpperCase()}`);
}

// strings = arguments
makeCar('Porsche');
makeCar('Ferrari');
makeCar();
