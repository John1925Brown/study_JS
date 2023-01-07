let money;
let itemExpences = {};
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let timeA = setInterval(function () {
  let date = new Date();
  let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  let dayWeeks = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  let hoursName = 'часов';
  let minuteName = 'минут';
  let secondName = 'секунд';
  if (date.getHours() > 1 && date.getHours() < 5 || date.getHours() > 21 && date.getHours() < 25) {
    hoursName = 'часа';
  } else if (date.getHours() === 1 || date.getHours() === 21) {
    hoursName = 'час';
  }
  if (date.getMinutes() === 1 || date.getMinutes() === 21 || date.getMinutes() === 31 || date.getMinutes() === 41 || date.getMinutes() === 51) {
    minuteName = 'минута';
  } else if (date.getMinutes() > 1 && date.getMinutes() < 5 || date.getMinutes() > 21 && date.getMinutes() < 25 || date.getMinutes() > 31 && date.getMinutes() < 35 || date.getMinutes() > 41 && date.getMinutes() < 45 || date.getMinutes() > 51 && date.getMinutes() < 55) {
    minuteName = 'минуты';
  }
  if (date.getSeconds() === 1 || date.getSeconds() === 21 || date.getSeconds() === 31 || date.getSeconds() === 41 || date.getSeconds() === 51) {
    secondName = 'секунда';
  } else if (date.getSeconds() > 1 && date.getSeconds() < 5 || date.getSeconds() > 21 && date.getSeconds() < 25 || date.getSeconds() > 31 && date.getSeconds() < 35 || date.getSeconds() > 41 && date.getSeconds() < 45 || date.getSeconds() > 51 && date.getSeconds() < 55) {
    secondName = 'секунды';
  }
  document.querySelector('.time-a').innerHTML = ('Сегодня ' + dayWeeks[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + date.getHours() + ' ' + hoursName + ' ' + date.getMinutes() + ' ' + minuteName + ' ' + date.getSeconds() + ' ' + secondName)
}, 1000);

let timeB = setInterval(function () {
  let date = new Date();
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  let hours = date.getHours();
  if (hours < 10) {
    hours = '0' + hours;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  let days = date.getDate();
  if (days < 10) {
    days = '0' + days;
  }
  let months = date.getMonth();
  if (months < 10) {
    months = '0' + months;
  }
  document.querySelector('.time-b').innerHTML = (days + '.' + (months + 1) + '.' + date.getFullYear() + ' - ' + hours + ':' + minutes + ':' + seconds);
}, 1000);


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

let incomeItemOne = document.querySelectorAll('.additional_income-item')[0];

let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expencesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let addIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let addExpencesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
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

