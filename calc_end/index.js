let itemExpenses = {};
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// let timeA = setInterval(function () {
//   let date = new Date();
//   let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
//   let dayWeeks = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
//   let hoursName = 'часов';
//   let minuteName = 'минут';
//   let secondName = 'секунд';
//   if (date.getHours() > 1 && date.getHours() < 5 || date.getHours() > 21 && date.getHours() < 25) {
//     hoursName = 'часа';
//   } else if (date.getHours() === 1 || date.getHours() === 21) {
//     hoursName = 'час';
//   }
//   if (date.getMinutes() === 1 || date.getMinutes() === 21 || date.getMinutes() === 31 || date.getMinutes() === 41 || date.getMinutes() === 51) {
//     minuteName = 'минута';
//   } else if (date.getMinutes() > 1 && date.getMinutes() < 5 || date.getMinutes() > 21 && date.getMinutes() < 25 || date.getMinutes() > 31 && date.getMinutes() < 35 || date.getMinutes() > 41 && date.getMinutes() < 45 || date.getMinutes() > 51 && date.getMinutes() < 55) {
//     minuteName = 'минуты';
//   }
//   if (date.getSeconds() === 1 || date.getSeconds() === 21 || date.getSeconds() === 31 || date.getSeconds() === 41 || date.getSeconds() === 51) {
//     secondName = 'секунда';
//   } else if (date.getSeconds() > 1 && date.getSeconds() < 5 || date.getSeconds() > 21 && date.getSeconds() < 25 || date.getSeconds() > 31 && date.getSeconds() < 35 || date.getSeconds() > 41 && date.getSeconds() < 45 || date.getSeconds() > 51 && date.getSeconds() < 55) {
//     secondName = 'секунды';
//   }
//   document.querySelector('.time-a').innerHTML = ('Сегодня ' + dayWeeks[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + date.getHours() + ' ' + hoursName + ' ' + date.getMinutes() + ' ' + minuteName + ' ' + date.getSeconds() + ' ' + secondName)
// }, 1000);

// let timeB = setInterval(function () {
//   let date = new Date();
//   let seconds = date.getSeconds();
//   if (seconds < 10) {
//     seconds = '0' + seconds;
//   }
//   let hours = date.getHours();
//   if (hours < 10) {
//     hours = '0' + hours;
//   }
//   let minutes = date.getMinutes();
//   if (minutes < 10) {
//     minutes = '0' + minutes;
//   }
//   let days = date.getDate();
//   if (days < 10) {
//     days = '0' + days;
//   }
//   let months = date.getMonth();
//   if (months < 10) {
//     months = '0' + months;
//   }
//   document.querySelector('.time-b').innerHTML = (days + '.' + (months + 1) + '.' + date.getFullYear() + ' - ' + hours + ':' + minutes + ':' + seconds);
// }, 1000);

let buttonCalc = document.querySelector('#start');

let incomePlus = document.querySelectorAll('button')[0];
let expensesPlus = document.querySelectorAll('button')[1];
let checkboxDeposit = document.querySelector('#deposit-check');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let incomeItemOne = document.querySelectorAll('.additional_income-item')[0];

let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let incomeItems = document.querySelectorAll('.income-items');
let addIncomeTitle = document.querySelectorAll('.additional_income-item')[0];


let placeWord = document.querySelectorAll('input'); // Получил массив инпутов
let placeholderName = [];
placeWord.forEach(element => {
  if (element.getAttribute('placeholder') === 'Наименование') {
    return placeholderName.push(element);
  }
});
console.log(placeholderName);


let appData = {
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  expensesMonth: 0,
  addExpenses: [],
  deposit: false,
  persentDeposit: 0,
  moneyDeposit: 0,
  start: function () {
    appData.budget = salaryAmount.value;
    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();
  },
  showResult: function () {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = Math.ceil(appData.budgetDay);
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());

    incomePeriodValue.value = appData.calcPeriod();
    periodSelect.addEventListener('change', function () {
      incomePeriodValue.value = appData.calcPeriod();
    });

  },
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth = +appData.expensesMonth + +appData.expenses[key];
    }
    return appData.expensesMonth;
  },
  getBudget: function () {
    appData.budgetMonth = +appData.budget + +appData.incomeMonth - +appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },
  getTargetMonth: function () {
    if (targetAmount.value / appData.budgetMonth < 0) {
      return 'Цель не будет достигнута';
    } else {
      return targetAmount.value / appData.budgetMonth;
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
  calcPeriod: function () {
    return appData.budgetMonth * periodSelect.value;
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.childNodes[1].value = '';
    cloneExpensesItem.childNodes[3].value = '';
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  },
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.childNodes[1].value = '';
    cloneIncomeItem.childNodes[3].value = '';
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
  },
  rangePeriod: function () {
    periodAmount.innerHTML = periodSelect.value;
  },
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        appData.incomeMonth += +cashIncome;
      }
    });
  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    })
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    })
  }
};

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
start.addEventListener('click', appData.start);
periodSelect.addEventListener('change', appData.rangePeriod);



addIncomeTitle.addEventListener('input', () => {
  addIncomeTitle.value = addIncomeTitle.value.replace(/[^а-я]/, '');  // Работает
});

expensesTitle.addEventListener('input', () => {
  expensesTitle.value = expensesTitle.value.replace(/[^а-я]/, ''); // Не работает
});

let disOff = function () {
  buttonCalc.removeAttribute('disabled');
};

let disOn = function () {
  if (salaryAmount.value === '') {
    buttonCalc.setAttribute('disabled', 'disabled');
  }
};

buttonCalc.addEventListener('click', disOn);
salaryAmount.addEventListener('input', disOff);
