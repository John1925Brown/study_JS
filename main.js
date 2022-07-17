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
console.log(str.length); // Количество символов строки
console.log(str.toUpperCase()); //Сделать все буквы в верхнем регистре
console.log(str.toLowerCase()); // Сделать все буквы в нижнем регистре
console.log(str[15]); // Вернуть из строки 15й символ
console.log(str.substring(7)); // Вернуть из строки все символы с 7го
console.log(str.substring(7, 17)); // Вернуть из строки все символы с 7 по 17
console.log(str.slice(7)); // Вернуть из строки все символы с 7го
console.log(str.slice(-9)); // Вернуть из строки все символы до 9го
console.log(str.substr(7, 17));
console.log(str.indexOf('Friends')); // Вернет первый символ с указанной подстроки
console.log(str.replace('my Friends', 'World')); // Поменять местами элементы в строке
console.log(str.split(' ')); // Создает строчный массив. Значение в кавычках берет за метки, которые его разделят

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
let budgetDay = 3000 / 30;
console.log(budgetDay);


// -------------------------Lesson 2 hw_h
let num = 266219;
let array = String(num).split('');
console.log(array);
let total = 1;
for (i = 0; i < array.length; i++) { // Что-то я тогда фигню придумал. Решил, что нужно использовать длину и единицы массива)
  total *= array[i];
}
total *= total * total;
let strTotal = String(total);
console.log(strTotal.substring(0, 2));



