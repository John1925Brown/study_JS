let btn = document.querySelector('.change');
let colorNum = document.querySelector('.color__num');
let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

let randomFunc = function () {
  let randomColor = [];
    for (let i = 0; i < 6; i++) {
      randomColor.push(arr[Math.floor(Math.random() * arr.length)]);
      };
      randomColor = '#' + randomColor.join('');
      colorNum.textContent = randomColor;
      document.body.style.backgroundColor = randomColor;
  };

btn.addEventListener('click', randomFunc);
