let itemExpenses = {};
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

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
let inputs = document.querySelectorAll('input');
let placeholderName = [];
let placeholderNum = [];

inputs.forEach(element => {
  if (element.getAttribute('placeholder') === 'Наименование') {
    placeholderName.push(element);
  }
});

inputs.forEach(el => {
  if (el.getAttribute('placeholder') === 'Сумма') {
    placeholderNum.push(el);
  }
});

placeholderName.forEach(input => {
  input.addEventListener('input', function () {
    input.value = input.value.replace(/[^А-яЁё ,.!?;]/g, '');
  });
});

placeholderNum.forEach(input => {
  input.addEventListener('input', function () {
    input.value = input.value.replace(/[^0-9]/g, '');
  });
});

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
