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
  
  let menuAnimate = function () { 
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
  const popUpBtns = document.querySelectorAll('.popup-btn');

document.addEventListener('click', () => {
    let target = event.target;
    if(popUp.style.display === 'block'){
      if(target.classList.contains('popup-close')){
        popUp.style.display = 'none';
      } 
      target = target.closest('.popup-content');
      if(!target){
        popUp.style.display = 'none';
        target = event.target;
      }
    }

  if(target.classList.contains('popup-btn')){
      popUp.style.display = 'block';
  }
});
}

togglePopup();

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

// tabs

const tabs = () => {
  const tabHeader = document.querySelector('.service-header');
  const tabs = tabHeader.querySelectorAll('.service-header-tab');
  const tabContent = document.querySelectorAll('.service-tab');

  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if(index === i){
        tabs[i].classList.add('active');
        tabContent[i].classList.remove('d-none');
      } else {
        tabs[i].classList.remove('active');
        tabContent[i].classList.add('d-none');
      }
      
    }
  };

  tabHeader.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.service-header-tab');
      if(target){
        tabs.forEach((item, i) => {
          if(item === target){
            toggleTabContent(i);
          }
        });
      }
    });
};

tabs();

});
