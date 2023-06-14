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
  // countTimer('20-june-2023');

});
