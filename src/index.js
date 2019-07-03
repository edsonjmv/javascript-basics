import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// -----

console.log(1 == '1'); // true
console.log(1 === '1'); // false

console.log(Boolean(true)); // true
console.log(Boolean('')); // false
console.log(Boolean('asdsaa')); // true

// truthy values => return true
console.log(!!true);
console.log(!!{});
console.log(!![]);
console.log(!!new Date());
console.log(!!'0');
console.log(!!42);
console.log(!!3.14);
console.log(!!-3.14);

// falsy values => return false
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.log(!!0);
console.log(!!'');
