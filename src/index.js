import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

console.log(String.prototype);

console.log('Pepperoni'.indexOf('P')); // 0
console.log('Pepperoni'.indexOf('i')); // 8
console.log('Pepperoni'.indexOf('z')); // -1

console.log('Pepperoni'.includes('P')); // true
console.log('Pepperoni'.includes('z')); // false

console.log('Pepperoni'.replace('oni', 'fire')); // Pepperfire

console.log('Pepperoni'.slice(2, -1)); // pperon
console.log('Pepperoni'.slice(0, -1)); // Pepperon
console.log('Pepperoni'.slice(0, 1)); // P
console.log('Pepperoni'.slice(0, 'Pepperoni'.length - 1)); // Pepperon
console.log('Pepperoni'.slice(0, 'Pepperoni'.length)); // Pepperoni

console.log('Pepperoni~Plain'.split('~')); // ["Pepperoni", "Plain"]
console.log('Pepperoni~Plain'.split('~')[0]); // "Pepperoni"
console.log('Pepperoni~Plain'.split(/~/)[1]); // "Plain"

console.log('   4444 5555 6666 7777    '.trim()); // 4444 5555 6666 7777
console.log('   4444 5555 6666 7777    '.replace(/\s/g, '')); // 4444555566667777
