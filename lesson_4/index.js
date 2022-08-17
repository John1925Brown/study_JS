let money = 2000;
let income = "freelance";
let addExpenses = "internet, taxi, cigarets";
let deposit = false;
let mission = 5000;
let period = 5;

money = parseFloat(prompt('Ваш ежемесячный доход?'));
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = parseFloat(prompt('Введите обязательную статью расходов?'));
let expenses2 = parseFloat(prompt('Введите обязательную статью расходов?'));
let amount1 = parseFloat(prompt('Во сколько это обойдется?'));
let amount2 = parseFloat(prompt('Во сколько это обойдется?'));

// ----------------------------- Начало lesson_4_hw

/* 
1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
5) Удалить из кода переменную budgetMonth
6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
7) Почистить консоль логи и добавить недостающие, должны остаться:
 - вызовы функции showTypeOf
 - Расходы за месяц вызов getExpensesMonth
 - Вывод возможных расходов в виде массива (addExpenses)
 - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
 - Бюджет на день (budgetDay)
 - вызов функции getStatusIncome
*/

let showTypeOf = function (data) {
  console.log(data, typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);



const getExpensesMonth = function (expenceFirst, expenceSecond, expenceThird, expenceFourth) {
  return expenceFirst + expenceSecond + expenceThird + expenceFourth;
};

getExpensesMonth(expenses1, expenses2, amount1, amount2);

const getAccumulatedMonth = function (budget, expenceFirst, expenceSecond, expenceThird, expenceFourth) {
  return budget - expenceFirst - expenceSecond - expenceThird - expenceFourth;
};

getAccumulatedMonth(money, expenses1, expenses2, amount1, amount2);

let accumulatedMonth = getAccumulatedMonth(money, expenses1, expenses2, amount1, amount2);

const getTargetMonth = function (target, accumulatedPerMonth) {
  return target / accumulatedPerMonth;
};

getTargetMonth(mission, accumulatedMonth);

let budgetDay = accumulatedMonth / 30;

let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay >= 600) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay >= 0) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
    return ('Что то пошло не так');
  }
};
console.log(getStatusIncome());


// ---------------------------hw_hard

/* 
Создайте функцию, которая принимает 1 аргумент (название произвольное)
— Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
— В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
— Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)
*/

let num = ' 52342454646521312312121231231231231234456465465654546546546546545465465465465465465465465465456465345 ';

let isString = function (a) {
  if (typeof a !== 'string') {
    return 'Это не строка!';
  };
};

console.log(isString(num));

let cut = function (word) {
  let arr = word.trim();
  return (String(arr));
};

console.log(cut(num));

let hideNum = function (word) {
  String(word);
  if (word.length > 30) {
    return word.split(0, 30) + '...';
  } else {
    return word;
  }
};

console.log(hideNum(num));

let func = function (a, callbackString, callbackCut, callbackHide) {
  a = callbackString(a);
  a = callbackCut(a);
  a = callbackHide(a);
  return callbackString(a), callbackCut(a), callbackHide(a);
};

console.log(func(num, isString(num), cut(num), hideNum(num)));
