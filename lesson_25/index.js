// {
// const phone = document.querySelector('#phone');
// const showLog = e => console.log(e.type);

// phone.addEventListener('keydown', showLog); // Клавиша "опустилась"
// phone.addEventListener('keyup', showLog); // Клавиша "поднялась"
// phone.addEventListener('keypress', showLog); // Момент нажатия на клавишу, между keydown и keyup. Работает, если добавляется символ
// phone.addEventListener('input', showLog); // Меняется value
// }

// const myForm = document.querySelector('#myform');
// myForm.addEventListener('submit', valid);
// const elementsForm = [];
// console.log(myForm.elements); // Псевдомассив, содержащий все элементы формы
// for(const elem of myForm.elements){
//   if(elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button'){
//     elementsForm.push(elem);
//   }
// }
// console.log(elementsForm);
// function valid(event) {
//   const patternPhone = /^\d+$/;
//   elementsForm.forEach(elem => {
//     if(!elem.value){
//       elem.style.border = 'solid red';
//       event.preventDefault();
//     } else{
//       elem.style.border = '';
//     }
//     if(elem.id === 'phone' && !patternPhone.test(elem.value)){
//       elem.style.border = 'solid red';
//       event.preventDefault();
//     }
//   })
//   }

const valid = new Validator({
  selector: '#myform',
  pattern: {
    phone: /^\+380\d{7}$/,
    zip: /\d{5,6}^$/
  },
  method: {
    'phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'email': [
      ['notEmpty'],
      ['pattern', 'email']
    ]
  }
});

valid.init();
