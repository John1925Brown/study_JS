let money;
let itemExpences = {};
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
  getExpensesMonth: function () { // Работает только, если вызвать функцию в appData.asking или написать ее за пределами объекта и там же ее вызвать
    for (let key in appData.expences) {
      appData.expensesMonth = appData.expensesMonth + +appData.expences[key];
    }
    return appData.expensesMonth;
  },
  getBudget: function () {
    AccumulatedMonthArr = [];
    appData.budgetMonth = money - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
    AccumulatedMonthArr.push(appData.budgetMonth, appData.budgetDay);
    return AccumulatedMonthArr; // Записывает как нужно, нужно вытянуть и закинуть в свои переменные, убрать описание
  },
  getTargetMonth: function () {
    if (appData.mission / appData.budgetMonth < 0) {
      return 'Цель не будет достигнута';
    } else {
      return appData.mission / appData.budgetMonth;
    }
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if (appData.budgetDay >= 600) {
      return ('У вас средний уровень дохода');
    } else if (appData.budgetDay >= 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
      return ('Что то пошло не так');
    }
  },
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    appData.expences = itemExpences;
    let questionExpences;
    itemExpencesCount = function () {
      let check;
      for (let i = 0; i < 2; i++) {
        questionExpences = prompt('Введите статью расходов');
        do {
          check = prompt('Во сколько обойдутся расходы?');
        }
        while (!isNumber(check));
        itemExpences[questionExpences] = check;
      }
      return itemExpences;
    }
    itemExpencesCount();

    console.log(appData.getExpensesMonth()); // Работает только, если вызвать функцию в appData.asking или написать ее за пределами объекта и там же ее вызвать
    console.log(appData.getBudget()); // Работает только, если вызвать функцию в appData.asking или написать ее за пределами объекта и там же ее вызвать
    appData.budgetMonth = AccumulatedMonthArr[0];
    appData.budgetDay = AccumulatedMonthArr[1];
    // appData.getTargetMonth();
    console.log('Расходы за месяц: ' + appData.expensesMonth);
    console.log('Цель будет достигнута за ' + appData.getTargetMonth() + ' месяцев');
    console.log(appData.getStatusIncome());
  }
};
console.log(appData);
appData.asking();
// console.log(appData.getExpensesMonth()); // Работает только, если вызвать функцию в appData.asking или написать ее за пределами объекта и там же ее вызвать

// appData.getExpensesMonth();

// console.log(appData.getBudget()); // Работает только, если вызвать функцию в appData.asking или написать ее за пределами объекта и там же ее вызвать




// function getExpensesMonthAfter() { // Работает, но нужно запихнуть в getExpensesMonth в appData
//   for (let key in appData.expences) { // Перебираем объект
//     appData.expensesMonth = appData.expensesMonth + +appData.expences[key];
//   }
//   return appData.expensesMonth;
// };

// console.log(getExpensesMonthAfter());

console.log('Наша программа включает в себя данные:');
for (let key in appData) { // Перебираем объект
  console.log(key + ' - ' + appData[key]);
}