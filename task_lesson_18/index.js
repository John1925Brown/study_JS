// let output = document.querySelector('#output');
let timesOfDay = document.querySelector('#timesOfDay');
let dayNow = document.querySelector('#dayNow');
let timeNow = document.querySelector('#timeNow');
let timesUntilNewYear = document.querySelector('#timesUntilNewYear');
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let showAllDates = function (newYear) {
  let date = new Date();
  let dayOfWeek = date.getDay();
  let seconds = date.getSeconds();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let untilNewYearM = Math.floor((new Date(newYear).getTime() - date.getTime()) / 60000);
  let daysuntilNewYear = Math.floor((Math.floor(untilNewYearM / 60)) / 24);

  let dayTime = '';
  if(hours > 0 && hours < 6){
    dayTime = 'Доброй ночи';
  }
  if(hours > 6 && hours < 12){
    dayTime = 'Доброе утро';
  }
  if(hours > 12 && hours < 18){
    dayTime = 'Добрый день';
  }
  if(hours > 18 && hours < 24){
    dayTime = 'Добрый вечер';
  }

  if(hours < 10){
    hours = '0' + hours;
  }
  if(minutes < 10){
    minutes = '0' + minutes;
  }
  if(seconds < 10){
    seconds = '0' + seconds;
  }

  timeNow.textContent = `Текущее время: ${hours}:${minutes}:${seconds}`;
  timesOfDay.textContent = dayTime;
  dayNow.textContent = 'Сегодня: ' + days[dayOfWeek];
  timesUntilNewYear.textContent = `До нового года осталось ${daysuntilNewYear} дней`;
}

showAllDates('01 01 2024');
