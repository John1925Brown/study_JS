// Было до урока 5
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = "freelance";
let addExpenses = "internet, taxi, cigarets";
let deposit = false;
let mission = 5000;
let period = 5;

let start = function () {
  do {
    money = parseFloat(prompt('Ваш ежемесячный доход?'));
  }
  while (!isNumber(money));
};

start();

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');

const getExpensesMonth = function () {
  let sum = 0;
  let check;
  for (let i = 0; i < 4; i++) {
    do {
      check = prompt('Во сколько обойдутся расходы?');
    }
    while (!isNumber(check));
    sum += +check;
  }
  return sum;
};

let expencesAmount = getExpensesMonth();

console.log('Расходы за месяц:' + expencesAmount);

const getAccumulatedMonth = function () {
  return money - expencesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function () {
  if (mission / accumulatedMonth < 0) {
    return 'Цель не будет достигнута';
  } else {
    return mission / accumulatedMonth;
  }
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

// Было до урока 5

// -----------------------Lesson_5_hw
// 1) Переписать функцию start циклом do while
// 2) Добавить проверку что введённые данные являются числом, которые мы получаем на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth
// 3) Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”


