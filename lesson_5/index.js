// Было до урока 5
let money = 2000;
let income = "freelance";
let addExpenses = "internet, taxi, cigarets";
let deposit = false;
let mission = 5000;
let period = 5;

money = parseFloat(prompt('Ваш ежемесячный доход?'));
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = parseFloat(prompt('Введите обязательную статью расходов?'));
let expenses2 = parseFloat(prompt('Введите обязательную статью расходов?'));
let amount1 = parseFloat(prompt('Во сколько это обойдется?'));
let amount2 = parseFloat(prompt('Во сколько это обойдется?'));

let showTypeOf = function (data) {
  console.log(data, typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);



const getExpensesMonth = function (expenceFirst, expenceSecond, expenceThird, expenceFourth) {
  return expenceFirst + expenceSecond + expenceThird + expenceFourth;
};

getExpensesMonth(expenses1, expenses2, amount1, amount2);

const getAccumulatedMonth = function (budget, expenceFirst, expenceSecond, expenceThird, expenceFourth) {
  return budget - expenceFirst - expenceSecond - expenceThird - expenceFourth;
};

getAccumulatedMonth(money, expenses1, expenses2, amount1, amount2);

let accumulatedMonth = getAccumulatedMonth(money, expenses1, expenses2, amount1, amount2);

const getTargetMonth = function (target, accumulatedPerMonth) {
  return target / accumulatedPerMonth;
};

getTargetMonth(mission, accumulatedMonth);

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

// Было до урока 5

