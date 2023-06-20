window.addEventListener('DOMContentLoaded', function () {
  
  //Timer
  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours');
    let timerMinutes = document.querySelector('#timer-minutes');
    let timerSeconds = document.querySelector('#timer-seconds');
    let interval;

    function getTimeRemaining() {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    if(timeRemaining < 0){
      timeRemaining = 0;
    }
    let seconds = Math.floor(timeRemaining % 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let hours = Math.floor(timeRemaining / 60 / 60);
      return {timeRemaining ,hours, minutes, seconds
      }
    }

    function updateClock() {
      let timer = getTimeRemaining();
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;

      if(timer.timeRemaining < 0){
        clearInterval(interval);
      }

      if(timer.seconds < 10){
        timerSeconds.textContent = '0' + timer.seconds;
      }
      if(timer.minutes < 10){
        timerMinutes.textContent = '0' + timer.minutes;
      }
      if(timer.hours < 10){
        timerHours.textContent = '0' + timer.hours;
      }
    }

    interval = setInterval(updateClock, 1000);
  }

countTimer('10-june-2023');


// Menu

const toogleMenu = () => {
  const btnMenu = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = document.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li');

  let animateInterval;
  let count = 0;
  
  let menuAnimate = function () { // Изначально в css был transition, закомментил его
    if(count < 100){
      animateInterval = requestAnimationFrame(menuAnimate); 
      count = count + 3;
      menu.style.transform = `translateX(${count}%)`;
    } else{
      count = 0;
      cancelAnimationFrame(animateInterval);
    }
    }

    btnMenu.addEventListener('click', () => {
      if(document.documentElement.clientWidth > 767){
        animateInterval = requestAnimationFrame(menuAnimate);
      } else{
        menu.style.transform = 'translateX(0)'
      }
    });

    let closeMenu = function () {
      menu.style.transform = 'translateX(-100%)';
    }
    
    closeBtn.addEventListener('click', closeMenu);

  menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });
};

toogleMenu();

// popup-window
const togglePopup = () => {
  const popUp = document.querySelector('.popup');
  const closeBtn = popUp.querySelector('.popup-close');
  const popUpBtns = document.querySelectorAll('.popup-btn');

  popUpBtns.forEach(item => {
    item.addEventListener('click', () =>{
      popUp.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    popUp.style.display = 'none';
  });
}

togglePopup();


// smooth page scrolling

// Реализовал через добавление изменение scrollTop. В ссылке изначально был адрес блока, на который нужно переместиться, я его удалил и поставил заглушку
// Думал, может как-то можно это сделать, просто добавляя адрес блока, но тогда не будет плавно скроллиться
// Или можно реализовать это без изменения html? Пытался добавлять preventDefault(с пустым адресом), но все равно не работало

const smoothScrolling = function () {
let btnScrolling = document.querySelector('#btn__scrolling');
let count = 0;
let scrollingInterval;

const scrollingFunc = function () {
  if(count < 831) {
    scrollingInterval = requestAnimationFrame(scrollingFunc);
    count = count + 25;
    document.documentElement.scrollTop = count;
    console.log(count);
  } else{
    cancelAnimationFrame(scrollingInterval)
  }
}

btnScrolling.addEventListener('click', () => {
  scrollingInterval = requestAnimationFrame(scrollingFunc);
});
}

smoothScrolling();

});
