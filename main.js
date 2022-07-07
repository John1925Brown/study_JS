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

