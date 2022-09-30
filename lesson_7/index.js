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
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function () {
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
  },
  getAccumulatedMonth: function () {
    return money - expencesAmount;
  },
  getTargetMonth: function () {
    if (appData.mission / accumulatedMonth < 0) {
      return 'Цель не будет достигнута';
    } else {
      return appData.mission / accumulatedMonth;
    }
  },
  getStatusIncome: function () {
    if (budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600) {
      return ('У вас средний уровень дохода');
    } else if (budgetDay >= 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
      return ('Что то пошло не так');
    }
  },
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    // appData.expences =
  }
};

appData.asking();

console.log(appData);



// const getExpensesMonth = function () {
//   let sum = 0;
//   let check;
//   for (let i = 0; i < 4; i++) {
//     do {
//       check = prompt('Во сколько обойдутся расходы?');
//     }
//     while (!isNumber(check));
//     sum += +check;
//   }
//   return sum;
// };

let expencesAmount = appData.getExpensesMonth();

console.log('Расходы за месяц:' + expencesAmount);

// const getAccumulatedMonth = function () {
//   return money - expencesAmount;
// };

let accumulatedMonth = appData.getAccumulatedMonth();

console.log(accumulatedMonth);

// const getTargetMonth = function () {
//   if (appData.mission / accumulatedMonth < 0) {
//     return 'Цель не будет достигнута';
//   } else {
//     return appData.mission / accumulatedMonth;
//   }
// };

console.log(appData.getTargetMonth());

let budgetDay = accumulatedMonth / 30;

// let getStatusIncome = function () {
//   if (budgetDay >= 1200) {
//     return ('У вас высокий уровень дохода');
//   } else if (budgetDay >= 600) {
//     return ('У вас средний уровень дохода');
//   } else if (budgetDay >= 0) {
//     return ('К сожалению у вас уровень дохода ниже среднего');
//   } else {
//     return ('Что то пошло не так');
//   }
// };

console.log(appData.getStatusIncome());

