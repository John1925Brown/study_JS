let start = document.querySelector('#start');
let cancel = document.querySelector('#cancel');
let btnIncAdd = document.querySelectorAll('button')[0];
let btnExpAdd = document.querySelectorAll('button')[1];
let checkBox = document.querySelector('#deposit-check');
let addIncItem = document.querySelectorAll('.additional_income-item');
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let addIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let addExpValue = document.getElementsByClassName('additional_expenses-value')[0];
let incPeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let expensesItems = document.querySelectorAll('.expenses-items'); 
let addExpItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let incomeItems = document.querySelectorAll('.income-items');


let AppData = function () {
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.expensesMonth = 0;
  this.deposit = false;
  this.persentDeposit = 0;
  this.moneyDeposit = 0;
  this.addExpenses = [];
};

AppData.prototype.check = function () {
  if(salaryAmount.value !== ''){
    start.removeAttribute('disabled');
  }
};

AppData.prototype.start = function () {
  if(salaryAmount.value == ''){
    start.setAttribute('disabled', 'true');
    return;
  }
  let allInput = document.querySelectorAll('input[type = text]');
  allInput.forEach(function(item){
    item.setAttribute('disabled', 'true');
  });
  btnExpAdd.setAttribute('disabled', 'true');
  btnIncAdd.setAttribute('disabled', 'true');
  start.style.display = 'none';
  cancel.style.display = 'block';

  this.budget = +salaryAmount.value;

  this.eventListeners();
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();
  this.getInfoDeposit();
  this.getStatusIncome();
  this.showResult();
};

AppData.prototype.showResult = function () {
  let _this = this; // Для того, чтобы в  incPeriodValue.value this смотрел на appData, а не на incPeriodValue
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  addExpValue.value = this.addExpenses.join(', '); 
  addIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
  incPeriodValue.value = this.calcPeriod();
  periodSelect.addEventListener('change', function () {
    incPeriodValue.value = _this.calcPeriod();
});
};

AppData.prototype.addExpensesBlock = function () {
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpAdd);
  expensesItems = document.querySelectorAll('.expenses-items');
  if (expensesItems.length === 3) {
    btnExpAdd.style.display = 'none';
  }
};
AppData.prototype.getExpenses = function () {
  let _this = this;
  expensesItems.forEach(function (item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if (itemExpenses !== '' && cashExpenses !== '') {
      _this.expenses[itemExpenses] = cashExpenses;
    }
  });
};
AppData.prototype.addIncomeBlock = function () {
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnIncAdd);
  incomeItems = document.querySelectorAll('.income-items');
  if (incomeItems.length === 3) {
    btnIncAdd.style.display = 'none';
  }
};
AppData.prototype.getIncome = function () {
  let _this = this;
  incomeItems.forEach(function (item) {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if (itemIncome !== '' && cashIncome !== '') {
      _this.income[itemIncome] = cashIncome;
    }
  });
  for(let key in this.income){
    this.incomeMonth += +this.income[key];
  }
};
AppData.prototype.getAddExpenses = function () {
  let _this = this;
  let addExpenses = addExpItem.value.split(',');
  addExpenses.forEach(function (item) {
    item = item.trim();
    if (item !== '') {
      _this.addExpenses.push(item);
    }
  });
};
AppData.prototype.getAddIncome = function () {
  let _this = this;
  addIncItem.forEach(function (item) {
    let itemValue = item.value.trim();
    if (itemValue !== '') {
      _this.addIncome.push(itemValue); 
    }
  });
};
AppData.prototype.getExpensesMonth = function () {
  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }
};
AppData.prototype.getBudget = function () {
  this.budgetMonth = +this.budget + +this.incomeMonth - +this.expensesMonth;
  this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function () {
    return targetAmount.value / this.budgetMonth;
};
AppData.prototype.getStatusIncome = function () {
  if (this.budgetDay >= 800) {
    return ('У вас высокий уровень дохода');
  } else if (this.budgetDay >= 300 && this.budgetDay < 800) {
    return ('У вас средний уровень дохода');
  } else if (this.budgetDay >= 0 && this.budgetDay < 300) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
    return ('Что то пошло не так');
  }
};
AppData.prototype.getInfoDeposit = function () {
  if (this.deposit) {
    this.persentDeposit = prompt('Какой годовой процент?', 10);
    while (!isNumber(this.persentDeposit)) {
      this.persentDeposit = prompt('Какой годовой процент?', 10);
    }
    this.moneyDeposit = prompt('Какая сумма положена?', 10000);
    while (!isNumber(this.moneyDeposit)) {
      this.moneyDeposit = prompt('Какая сумма положена?', 10000);
    }
  }
};
AppData.prototype.calcPeriod = function () {
  return this.budgetMonth * periodSelect.value;
};

AppData.prototype.reset = function () {
  let inputTextData = document.querySelectorAll('.data input[type = text]');
  let resultInputAll = document.querySelectorAll('.result input[type = text]');
  inputTextData.forEach(item =>{
    item.value = '';
    item.removeAttribute('disabled');
    periodSelect.value = 0;
    periodAmount.innerHTML = periodSelect.value;
  });
  resultInputAll.forEach(item =>{
    item.value = '';
  });

  for (let i = 0; i < incomeItems.length; i++) {
    incomeItems[i].parentNode.removeChild.incomeItems[i];
    btnIncAdd.style.display = 'block';
  }
  for (let i = 0; i < expensesItems.length; i++) {
    expensesItems[i].parentNode.removeChild.expensesItems[i];
    btnExpAdd.style.display = 'block';
  }

  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.expensesMonth = 0;
  this.deposit = false;
  this.persentDeposit = 0;
  this.moneyDeposit = 0;
  this.addExpenses = [];

  cancel.style.display = 'none';
  start.style.display = 'block';
  btnExpAdd.removeAttribute('disabled');
  btnIncAdd.removeAttribute('disabled');
  checkBox.checked = 'false';
};

AppData.prototype.eventListeners = function () {
  let _this = this;
  start.addEventListener('click', _this.start.bind(_this));
  btnExpAdd.addEventListener('click', _this.addExpensesBlock);
  btnIncAdd.addEventListener('click', _this.addIncomeBlock);
  salaryAmount.addEventListener('keyup', _this.check);
  cancel.addEventListener('click', _this.reset.bind(_this));

  periodSelect.addEventListener('change', function () {
    periodAmount.value = periodSelect.value;
    });

    let addExp = [];
    for (let i = 0; i < _this.addExpenses.length; i++) {
      let element = _this.addExpenses[i].trim();
      element = element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
      addExp.push(element);
    };
};

let appData = new AppData();

appData.eventListeners();
