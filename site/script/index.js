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

document.addEventListener('click', (event) => {
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
  } else{
    cancelAnimationFrame(scrollingInterval)
    count = 0;
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


// slider
const sliderFunc = () => {
  const slider = document.querySelector('.portfolio-content');
  let slides = document.querySelectorAll('.portfolio-item');
  const btnSlider = document.querySelectorAll('.portfolio-btn');
  let currentSlide = 0;
  let interval;
  
  const dotsAdd = () => {
    const dotsWrapper = document.querySelector('.portfolio-dots');

    for (let i = 0; i < slides.length - 1; i++) {
      let newDot = document.createElement('li');
      newDot.classList.add('dot');
      dotsWrapper.append(newDot);
    }
  }

  dotsAdd();

  let dots = document.querySelectorAll('.dot');

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  }

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  }

  const autoPlaySlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');
    currentSlide++;

    if(currentSlide >= slides.length){
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  };

  const startSlide = (time = 1500) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    if(target.matches('#arrow-right')){
      currentSlide++;
    }else if(target.matches('#arrow-left')){
      currentSlide--;
    } else if(target.matches('.dot')){
      dots.forEach((elem, index, ) => {
        if(elem === target){
          currentSlide = index;
        }
      });
    }

    if(currentSlide >= slides.length){
      currentSlide = 0;
    } else if(currentSlide < 0){
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  });

  slider.addEventListener('mouseover', (e) => {
    if(e.target.matches('.portfolio-btn') ||
    e.target.matches('.dot')){
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', (e) => {
    if(e.target.matches('.portfolio-btn') ||
    e.target.matches('.dot')){
      startSlide();
    }
  });

  startSlide(1500);
}

sliderFunc();

// ourTeam change images

const ourTeamChangeImages = () => {
  let teammatesBlock = document.querySelector('#command');
  teammatesBlock.addEventListener('mouseover', (event) => {
    let target = event.target;
    if(target.classList.contains('command__photo')){
      event.target.alt = event.target.src;
      event.target.src = event.target.dataset.img;
    }
  });
  teammatesBlock.addEventListener('mouseout', (event) => {
    let target = event.target;
    if(target.classList.contains('command__photo')){
      event.target.src = event.target.alt;
    }
  });
}

ourTeamChangeImages();

// Inputs Validation

const inputsValidation = () => {
  // calc inputs validation
  const calcBlock = document.querySelector('.calc-block');
  const calcInputs = calcBlock.querySelectorAll('input');

  calcBlock.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/\D/g, '');
    });

  // Questions block inputs validation
  const footerInputBlock = document.querySelector('.footer-form-input');
  const footerInputs = footerInputBlock.querySelectorAll('input');

    footerInputBlock.addEventListener('input', (event) => {
      let target = event.target;
      if(target.id === 'form2-name'|| target.id === 'form2-message'){ // name, message validation
        target.value = target.value.replace(/[a-z0-9]/gi, '');
      }
      if(target.id === 'form2-email'){
        if(!/^[a-zA-Z0-9@\-_.'!*~]+$/.test(target.value)){ // email validation
          target.value = target.value.slice(0, -1);
        }
      }
      if(target.id === 'form2-phone'){ // phone validation
        if(!/^[0-9\-()+]+$/.test(target.value)){
          target.value = target.value.slice(0, -1);
        }
      }
    });
    let inputsCorrection = () => {
      if(/^(-| )/g.test(event.target.value)){ // Удаляет пробелы и тире в начале строки
        event.target.value = event.target.value.slice(1);
        inputsCorrection(event.target);
      }
      
      if(/(-| )$/g.test(event.target.value)){ // Удаляет пробелы и тире в конце строки
        event.target.value = event.target.value.slice(0, -1);
        inputsCorrection(event.target);
      }
      event.target.value = event.target.value.replace(/-{2,}/g, '-'); // Замена нескольких тире на одно
      event.target.value = event.target.value.replace(/ {2,}/g, ' '); // Замена нескольких пробелов на один
        if(event.target.id === 'form2-name'){ // Изменение имени на нужный формат
          let name = event.target.value[0].toUpperCase() + event.target.value.slice(1).toLowerCase();
          event.target.value = name;
        }
    }

    footerInputs.forEach(el => {
      el.addEventListener('blur', inputsCorrection);
    });
}

inputsValidation();

});
