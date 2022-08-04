let money = 2000;
let income = "freelance";
let addExpenses = "internet, taxi, cigarets";
let deposit = false;
let mission = 5000;
let period = 5;

money = prompt('Ваш ежемесячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let amount2 = prompt('Во сколько это обойдется?');

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

const getExpensesMonth = function () {
  return parseFloat(expenses1) + parseFloat(expenses2) + parseFloat(amount1) + parseFloat(amount2);
};

getExpensesMonth(expenses1, expenses2, amount1, amount2);

const getAccumulatedMonth = function () {
  return parseFloat(money) - (parseFloat(expenses1) + parseFloat(expenses2) + parseFloat(amount1) + parseFloat(amount2));
};

getAccumulatedMonth(money, expenses1, expenses2, amount1, amount2);

let accumulatedMonth = getAccumulatedMonth(money, expenses1, expenses2, amount1, amount2);

const getTargetMonth = function () {
  return mission / accumulatedMonth;
};

getTargetMonth(mission, accumulatedMonth);

let budgetDay = accumulatedMonthpe / 30;


