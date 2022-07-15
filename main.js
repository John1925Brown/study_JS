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


// ---------------------------------Lesson 2
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

//---------------------------------------Lesson 2 hw
let money = 2000;
let income = "freelance";
let addExpenses = "internet, taxi, cigarets";
let deposit = false;
let mission = 5000;
let period = 5;

console.log(typeof (money));
console.log(typeof (income));
console.log(typeof (deposit));
console.log("Период равен " + period + " месяцев." + " Цель заработать " + mission + " $.");
addExpenses.toLowerCase();
console.log(addExpenses.split(', '));
let budgetDay = 3000 / 30; // Нужно ли применять метод math в этом случае?
console.log(budgetDay);


// -------------------------Lesson 2 hw_h
let num = 266219;
array = ('' + num).split('');
console.log(array);
let total;
for (i = 0; i < num.length; i++) {
  total = array[i] * array[i + 1];
}; //-------------------------Не работает-----Должен перемножать каждую i-тую цифру из числа на каждую i-тую + 1(следующую)
console.log(total);
total *= total * total;
totalStr = total.toString();
console.log(totalStr.substring(0, 1)); // Не работает---Должен выводить 1 и 2 элементы строки, но выводит только второй(Проверял, когда задавал total какое либо значение больше 0)
