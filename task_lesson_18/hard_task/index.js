let inputText = document.querySelector('#input--text');
let outputText = document.querySelector('#output--text');

function showText() {
  outputText.textContent = inputText.value;
}

let debouncingFunc = (func, time) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, time);
  };
}

inputText.addEventListener('keyup', debouncingFunc(showText, 300));
