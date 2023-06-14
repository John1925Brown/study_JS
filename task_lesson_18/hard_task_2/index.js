let squareDiv = document.querySelector('.img1');
let square = document.querySelector('.square');
let goBtn = document.querySelector('.btn__go');
let stopBtn = document.querySelector('.btn__stop');
let returnBrn = document.querySelector('.btn__return');

let animateInterval;
let count = 0;

let animate = function () {
  animateInterval = requestAnimationFrame(animate);
  count++;
  if(count < 350) {
    squareDiv.style.left = count + 'px';
  } else{
    cancelAnimationFrame(animateInterval);
  }
}


// document.addEventListener('click', () => {
//     animateInterval = requestAnimationFrame(animate);
// });

goBtn.addEventListener('click', () => {
  animateInterval = requestAnimationFrame(animate);
});

stopBtn.addEventListener('click', () => {
  cancelAnimationFrame(animateInterval);
});

returnBrn.addEventListener('click', () => {
  squareDiv.style.left = '0px';
  count = 0;
  cancelAnimationFrame(animateInterval);
});


