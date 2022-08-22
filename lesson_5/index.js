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
  money = parseFloat(prompt('Ваш ежемесячный доход?'));
  while (!isNumber(money)) {
    money = parseFloat(prompt('Ваш ежемесячный доход?'));
  }
};

start();

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');

const getExpensesMonth = function () {
  let sum = 0;
  for (let i = 0; i < 4; i++) {
    sum += parseFloat(prompt('Введите обязательную статью расходов?'));
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
  return mission / accumulatedMonth;
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

