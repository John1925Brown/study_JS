// Было до урока 7
let money;
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function () {
  do {
    money = parseFloat(prompt('Ваш ежемесячный доход?'));
  }
  while (!isNumber(money));
};

start();


let appData = {
  income: {},
  addIncome: [],
  expences: {},
  addExpenses: [],
  deposit: false,
  mission: 5000,
  period: 5,
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
  }
};




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
  if (appData.mission / accumulatedMonth < 0) {
    return 'Цель не будет достигнута';
  } else {
    return appData.mission / accumulatedMonth;
  }
};

console.log(getTargetMonth());

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

// Было до урока 7