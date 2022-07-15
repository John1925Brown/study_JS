function printHello(a, b, c, d) {
  return a + b + c
}

console.log(printHello(2, 4, 5));



const sec = function (arr) {
  return arr.shift();
};

console.log(sec([1, 2, 4, 6, 8]));

const hello = (arg) => {
  return arg + ' World!';
};

console.log(hello('Hello'));

const head = document.getElementsByClassName('title');
const div = document.querySelector('div');
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const title = document.querySelector('h1');

console.log(head);

// red.className = 'blue';
// div.classList.add('red');
// div.classList.remove('blue');

div.classList.toggle('red');
div.classList.toggle('blue');

title.style.textDecoration = 'underline';

let myVar;
myVar = 3;
console.log(typeof myVar);
myVar = 'string';
console.log(typeof myVar);
myVar = true;
console.log(typeof myVar);
myVar = undefined;
console.log(typeof myVar);
myVar = null;
console.log(typeof myVar);
myVar = Symbol();
console.log(typeof myVar);
myVar = {};
console.log(typeof myVar);

let str = "Hello, my Friends!";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str[15]);
console.log(str.substring(7));
console.log(str.substring(7, 17));
console.log(str.slice(7));
console.log(str.slice(-9));
console.log(str.substr(7, 17));
console.log(str.indexOf('Friends'));
console.log(str.replace('my Friends', 'World'));
console.log(str.split(' '));