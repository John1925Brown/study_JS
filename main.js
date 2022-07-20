'use strict'
/*
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
*/
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

/*
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
*/
/*
//--------------------------Lesson 3
'use strict' //Строгий режим. Код ведет себя несколько иначе: появляются ошибки, когда требуется дополнительная отладка
let question = confirm('Тебе есть 18 лет ?');
let question2 = prompt('Сколько тебе лет?', '18');
// confirm(); Вывод модального окна с булевым выражением и кнопками 'ок' и 'отмена'
// prompt(); Вывод модального окна, возвращает введенные данные. Второе значение - значение по умолчанию
console.log(question);
console.log(question2);

console.log(5 + '5'); //Производится конкатенация, меняется тип данных на строку;
console.log(5 - '5'); // Вычитание, умножение, деление, сравнение меняют тип данных строки на число. Если не получается, то выведет NaN
console.log(5 / '5');
console.log(5 * '5');
console.log(5 == '5');

console.log(Boolean(5)); // Преобразование в булевый тип
console.log(!!5); // Преобразование через оператор двойного отрицания

console.log(String([1, 2, 3])); // Преобразование в строку. Оператор работает со всеми типами данных
console.log(10 + ''); // Преобразование в строку
console.log(10..toString()); // Преобразование в строку. Оператор работает с числами и булевыми типами данных
console.log(typeof Number('15')); // Преобразование в число
console.log(typeof +'10');
console.log(parseInt('15.5 px 1')); // Мягкое преобразование в число. Работает с целыми числами. До первой буквы
console.log(parseFloat('15.5 px 1 ')); // Мягкое преобразование в число. Работает с дробными числами. До первой буквы

let n = 5;
if (n > 5) {
  console.log('n больше 5');
} else if (n < 5) {
  console.log('n < 5');
} else {
  console.log('n равно 5');
}

switch (n) {
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
  case 5:
    console.log(5);
  case 6:
    console.log(6);
    break;
  case 7:
    console.log(7);
    break;
  case 8:
  case 9:
  case 10:
    console.log('7 - 10');
  default:
    console.log('Не верно')             //Команда, которая выполнится, если другие не выполнятся. Делается строгое соответствие
}                                //Заменяет if-else. Break останавливает выполнение команд дальше.

let result = true ? 1 : 0; // Тернарный оператор сравнения. При true выполняется первая команда и иначе
*/
// ----------------------------------------Lesson3_hw
money = prompt('Ваш ежемесячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let amount2 = prompt('Во сколько это обойдется?');
let budgetMonth = parseFloat(money) - (parseFloat(expenses1) + parseFloat(expenses2) + parseFloat(amount1) + parseFloat(amount2));
console.log(budgetMonth);

let monthBeforeMisson = Math.ceil(mission / budgetMonth);
budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);
if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что то пошло не так');
}  // Через else/if немного удобнее было делать. Если делать через switch, то нужно прописывать много кейсов или можно один?


