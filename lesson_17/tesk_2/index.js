function getResult(x, y) {
  return String(Math.pow(x, y)).split('').reduce((acc, cur) => +acc + +cur);
}

console.log(getResult(4, 8));
