const start = document.querySelector('#start');
const cancel = document.querySelector('#cancel');
const btnIncomeAdd = document.querySelectorAll('button')[0];
const btnExpAdd = document.querySelectorAll('button')[1];
const depositCheck = document.querySelector('#deposit-check');
const depositBank = document.querySelector('.deposit-bank');
const depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
const addIncItem = document.querySelectorAll('.additional_income-item');
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
const addIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const addExpValue = document.getElementsByClassName('additional_expenses-value')[0];
const incPeriodValue = document.getElementsByClassName('income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
let expensesItems = document.querySelectorAll('.expenses-items'); 
const addExpItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let incomeItems = document.querySelectorAll('.income-items');


class AppData {
  constructor(){
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.expensesMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.addExpenses = [];
  }
};

AppData.prototype.check =  () => {
  if(salaryAmount.value.length && !isNaN(+depositPercent.value && +depositPercent.value >= 0 || +depositPercent.value <= 100)){
    start.removeAttribute('disabled');
  }
};

AppData.prototype.start = function () {
  if(salaryAmount.value == '' || isNaN(+depositPercent.value) || +depositPercent.value < 0 || +depositPercent.value > 100){
    start.setAttribute('disabled', 'true');
    return;
  }

  const allInput = document.querySelectorAll('input[type = text]');
  allInput.forEach((item) => {
    item.setAttribute('disabled', 'true');
  });
  btnExpAdd.setAttribute('disabled', 'true');
  btnIncomeAdd.setAttribute('disabled', 'true');
  start.style.display = 'none';
  cancel.style.display = 'block';

  this.budget = +salaryAmount.value;

  this.eventListeners();
  this.getExpInc();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getInfoDeposit();
  this.getBudget();
  this.getStatusIncome();
  this.showResult();
};

AppData.prototype.showResult = function () {
  const _this = this; // Для того, чтобы в  incPeriodValue.value this смотрел на appData, а не на incPeriodValue
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  addExpValue.value = this.addExpenses.join(', '); 
  addIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
  incPeriodValue.value = this.calcPeriod();
  periodSelect.addEventListener('change',  () => {
  incPeriodValue.value = _this.calcPeriod();
});
};
AppData.prototype.addExpIncBlock = function(event){
  if(event.target.parentNode.className === 'income'){
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnIncomeAdd);
    incomeItems = document.querySelectorAll(`.${event.target.parentNode.className}-items`);
    if (incomeItems.length === 3) {
      btnIncomeAdd.style.display = 'none';
    }
  }
  if(event.target.parentNode.className === 'expenses'){
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpAdd);
    expensesItems = document.querySelectorAll(`.${event.target.parentNode.className}-items`);
    if (expensesItems.length === 3) {
      btnExpAdd.style.display = 'none';
    }
  }

};

AppData.prototype.getAddExpenses = function () {
  const _this = this;
  addExpenses = addExpItem.value.split(',');
  addExpenses.forEach((item) => {
    item = item.trim();
    if (item.length) {
      _this.addExpenses.push(item);
    }
  });
};
AppData.prototype.getAddIncome = function () {
  const _this = this;
  addIncItem.forEach((item) => {
    item = item.value.trim();
    if (item.length) {
      _this.addIncome.push(item); 
    }
  });
};

AppData.prototype.getExpInc = function() {
  const _this = this;
  const count = item => {
    const startStr = item.className.split('-')[0];
    const itemTitle = item.querySelector(`.${startStr}-title`).value;
    const itemAmount = item.querySelector(`.${startStr}-amount`).value;
        if (itemTitle.length && itemAmount.length) {
          _this[startStr][itemTitle] = itemAmount;
    }
}

  incomeItems.forEach(count);
  expensesItems.forEach(count);

    for(let key in this.income){
    this.incomeMonth += +this.income[key];
  }
};

AppData.prototype.getExpensesMonth = function () {
  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }
};
AppData.prototype.getBudget = function () {
  const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
  this.budgetMonth = +this.budget + +this.incomeMonth - +this.expensesMonth + monthDeposit;
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
    this.percentDeposit = depositPercent.value;
    this.moneyDeposit = depositAmount.value;
  }
};

AppData.prototype.changePercent =  function () {
  let valueSelect = this.value;
  if(valueSelect === 'other'){
    depositPercent.style.display = 'inline-block';
    
  } else{
    depositPercent.value = valueSelect;
    depositPercent.style.display = 'none';
  }
  };

AppData.prototype.calcPeriod = function () {
  return this.budgetMonth * periodSelect.value;
};

AppData.prototype.reset = function () {
  const inputTextData = document.querySelectorAll('.data input[type = text]');
  const resultInputAll = document.querySelectorAll('.result input[type = text]');
  inputTextData.forEach((item) =>{
    item.value = '';
    item.removeAttribute('disabled');
    periodSelect.value = 0;
    periodAmount.innerHTML = periodSelect.value;
  });
  resultInputAll.forEach((item) =>{
    item.value = '';
  });

  for (let i = 0; i < incomeItems.length; i++) {
    incomeItems[i].parentNode.removeChild.incomeItems[i];
    btnIncomeAdd.style.display = 'block';
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
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.addExpenses = [];

  cancel.style.display = 'none';
  start.style.display = 'block';
  btnExpAdd.removeAttribute('disabled');
  btnIncomeAdd.removeAttribute('disabled');
  depositCheck.checked = 'false';
};

AppData.prototype.depositHandler = function () {
  if(depositCheck.checked){
    depositAmount.style.display = 'inline-block';
    depositBank.style.display = 'inline-block';
    this.deposit = true;
    depositBank.addEventListener('change', this.changePercent);
  } else{
    depositAmount.style.display = 'none';
    depositBank.style.display = 'none';
    depositAmount.value = '';
    depositBank.value = '';
    depositBank.removeEventListener('change', this.changePercent);
  }
  };

AppData.prototype.eventListeners = function () {
  const _this = this;
  start.addEventListener('click', _this.start.bind(_this));
  btnExpAdd.addEventListener('click', _this.addExpIncBlock);
  btnIncomeAdd.addEventListener('click', _this.addExpIncBlock);
  salaryAmount.addEventListener('keyup', _this.check);
  depositPercent.addEventListener('keyup', _this.check);
  cancel.addEventListener('click', _this.reset.bind(_this));

  periodSelect.addEventListener('change',  () => {
    periodAmount.value = periodSelect.value;
    });

    const addExp = [];
    for (let i = 0; i < _this.addExpenses.length; i++) {
      let element = _this.addExpenses[i].trim();
      element = element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
      addExp.push(element);
    };

    depositCheck.addEventListener('change', this.depositHandler.bind(this));
};


const appData = new AppData();

appData.eventListeners();
