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

let buttonCalc = document.querySelector('#start');

let buttonPlucIncome = document.querySelectorAll('button')[0];
let buttonPlucExpences = document.querySelectorAll('button')[1];
let checkboxDeposit = document.querySelector('#deposit-check');

let incomeItemOne = document.querySelectorAll('.additional_income-item')[0]; // Логично ли переменные назвать incomeItem1/2/3... Так как может же быть не 2 расхода, а 15. Вроде было бы проще прописать, чтобы увеличивалось число в названии при создании такой же новой переменной?
let incomeItemTwo = document.querySelectorAll('.additional_income-item')[1];

let resultBudgetMonth = document.getElementsByClassName('.result-budget_month')[0];
let resultBudgetDay = document.getElementsByClassName('.result-budget_day')[1];
let resultExpencesMonth = document.getElementsByClassName('.result-expenses_month')[2];
let resultAddIncome = document.getElementsByClassName('.result-additional_income')[3];
let resultAddExpences = document.getElementsByClassName('.result-additional_expenses')[4];
let resultIncomePeriod = document.getElementsByClassName('.result-income_period')[5];
let resultTargetMonth = document.getElementsByClassName('.result-target_month')[6];

let salary = document.querySelector('.salary-amount');

let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');

let expencesTitle = document.querySelector('.expenses-title');
let expencesAmount = document.querySelector('.expenses-amount');

let addExpensesItem = document.querySelector('.additional_expenses-item');

let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');


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
      while (isNumber(itemIncome || itemIncome === null || itemIncome === '')) {
        itemIncome = prompt('Какой у вас дополнительный заработок?', 'Такси');
      }
      let cashIncome = prompt('Сколько зарабатываете в месяц?', 10000);
      while (!isNumber(cashIncome)) {
        cashIncome = prompt('Сколько зарабатываете в месяц?', 10000);
      }
      appData.income[itemIncome] = cashIncome;
    }
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(',').map(elem => { return elem[0].toUpperCase() + elem.slice(1); }).join(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
      let itemExpences = prompt('Введите обязательную статью расходов', 'Оплата квартиры');
      while (isNumber(itemExpences) || itemExpences === null || itemExpences === '') {
        itemExpences = prompt('Введите обязательную статью расходов', 'Оплата квартиры');
      }
      let cashExpences;
      do {
        cashExpences = prompt('Во сколько это обойдется?');
      } while (cashExpences === '' || cashExpences === null || isNaN(cashExpences));
      appData.expences[itemExpences] = cashExpences;
    }
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

// console.log('Наша программа включает в себя данные:');

// for (const key of Object.entries(appData)) {
//   console.log(key);
// }
// appData.getInfoDeposit();
// console.log(appData.persentDeposit, appData.moneyDeposit, appData.calcSaveMoney());

