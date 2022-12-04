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
  persentDeposit: 0,
  moneyDeposit: 0,
  mission: 5000,
  period: 5,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function () {
    for (let key in appData.expences) {
      appData.expensesMonth = appData.expensesMonth + appData.expences[key];
    }
    return appData.expensesMonth;
  },
  getBudget: function () {
    AccumulatedMonthArr = [];
    appData.budgetMonth = money - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
    AccumulatedMonthArr.push(appData.budgetMonth, appData.budgetDay);
    return AccumulatedMonthArr;
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
  getInfoDeposit: function () {
    if (appData.deposit) {
      appData.persentDeposit = prompt('Какой годовой процент?', 10);
      while (!isNumber(appData.persentDeposit)) {
        appData.persentDeposit = prompt('Какой годовой процент?', 10);
      }
      appData.moneyDeposit = prompt('Какая сумма положена?', 10000);
      while (!isNumber(appData.moneyDeposit)) {
        appData.moneyDeposit = prompt('Какая сумма положена?', 10000);
      }
    }
  },
  calcSaveMoney: function () {
    return appData.budgetMonth * appData.period;
  },
  asking: function () {
    if (confirm('Есть ли у вас дополнительный заработок?')) {
      let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Такси');
      let cashIncome = prompt('Сколько зарабатываете в месяц?', 10000);
      appData.income[itemIncome] = cashIncome;
    }
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    function getRequreExp() {
      let count = 0;
      do {
        count = prompt('Во сколько обойдутся расходы?');
      } while (!isNumber(count));
      return +count;
    }
    for (let i = 0; i < 2; i++) {
      appData.expences[prompt('Введите статью расходов')] = getRequreExp();
    }
    console.log("appData.expences", appData.expences);
  }
};

appData.asking();
console.log("appData.expences", appData.expences);

appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();


console.log('Наша программа включает в себя данные:');

for (const key of Object.entries(appData)) {
  console.log(key);
}
appData.getInfoDeposit();
console.log(appData.persentDeposit, appData.moneyDeposit, appData.calcSaveMoney());

console.log(money);