let buttons = document.querySelectorAll('.button');
const content = document.querySelector('.content');
const wrapper = document.querySelector('.wrapper');
const addButton = document.querySelector('.button__add');


// Способ решения задачи с добавлением кнопок на страницу и навешиванию на них события по изменению текста другого блока БЕЗ делегирования
// Из минусов: много когда, много событий. Даже для такой малой задачи
// В больших проектах это будет совсем не эргономично

// const changeText = (elem) => {
//   content.textContent = elem.textContent;
// };

// buttons.forEach((elem) => {
//   elem.addEventListener('click', () => {
//     changeText(elem);
//   });
// });

// const addButtonFunc = () => {
  //   let newButton = buttons[0].cloneNode();
//   let textButtons = buttons.length + 1
//   if(textButtons < 10){
  //     textButtons = '0' + textButtons;
  //   }
//   newButton.textContent = textButtons;
//   newButton.addEventListener('click', () => {
//     changeText(newButton);
//   });
//   wrapper.appendChild(newButton);
//   buttons = document.querySelectorAll('.button');
// }

// addButton.addEventListener('click', addButtonFunc);


// Реализация через делегирование

  const changeText = (event) => {
    content.textContent = event.target.textContent;
  };
  
  const addButtonFunc = () => {
    let newButton = buttons[0].cloneNode();
    let textButtons = buttons.length + 1
    if(textButtons < 10){
      textButtons = '0' + textButtons;
    }
    newButton.textContent = textButtons;
    wrapper.appendChild(newButton);
    buttons = document.querySelectorAll('.button');
  }
  
  addButton.addEventListener('click', addButtonFunc);
  
  wrapper.addEventListener('click', () => {
    if(event.target.tagName === 'BUTTON'){
      changeText(event);
    }
  });
