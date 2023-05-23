let numA = document.querySelector('#number__a');
let numB = document.querySelector('#number__b');
let showInput = document.querySelector('#res');
let sumButton = document.querySelector('#sum');
let multButton = document.querySelector('#mult');




const calculator = {
  res: 0,
  sum: function(a, b){
    if(!isNaN(+a) && !isNaN(+a)&& a && b){
      this.res = +a + +b;
      return this.res;
    } else{
      alert('Введите правильное значение');
    }
  },
  mult: function(a, b){
    if(!isNaN(+a) && !isNaN(+a)&& a && b){
      this.res = a * b;
      return this.res;
    } else{
      alert('Введите правильное значение');
    }
  },
  show: function(){
    showInput.value = calculator.res;
    numA.value = '';
    numB.value = '';
  }
}


sumButton.addEventListener('click', () => calculator.sum(numA.value, numB.value));
multButton.addEventListener('click', () => calculator.mult(numA.value, numB.value));
sumButton.addEventListener('click', calculator.show);
multButton.addEventListener('click', calculator.show);
