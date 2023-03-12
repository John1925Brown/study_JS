// 1) Сделать класс DomElement, который
//    содержит свойства
//   - selector, 
//   - height, 
//   - width, 
//   - bg, 
//   - fontSize
// содержит метод, который создает элемент на странице в зависимости от условия:  
// - если строка selector начинается с точки, создаем div с классом
// - если строка selector  начинается с решетки # то создаем параграф с id
// пример:
// если передана строка '.block', то функция конструктор создает элемент с class="block"
// если передана строка '#best', то функция конструктор создает элемент с id =best"
// с помощью cssText задавать стили: 
//   - высотой - height,
//   - шириной - width, 
//   - background - bg
//   - размер текста fontSize 
// внутрь созданного блока записывать любой текст. Метод записи может быть любым. ----Не понял что именно тут нужно сделать.
//  Сам метод должен какой-то текст выводить? Или инпут внутри должен быть, или что-то другое?

// 2) Создать новый объект на основе класса DomElement
// 3) Вызвать его метод чтобы получить элемент на странице

let body = document.querySelector('body');
function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.addElem = function(){
  let newElem;
  let selectorElem = this.selector.split('')[0];
  let classElem = this.selector.split('').splice(1).join('');
  if(selectorElem === '.'){
    newElem = document.createElement('div');
    newElem.classList.add(classElem);
  } else if(selectorElem === '#'){
    newElem = document.createElement('p');
    newElem.setAttribute('id', classElem);
  }
  body.appendChild(newElem);
  newElem.style.height = this.height + 'px';
  newElem.style.width = this.width + 'px';
  newElem.style.backgroundColor = this.bg;
  newElem.style.fontSize = this.fontSize + 'px';
};


let domElement = new DomElement('#className', 70, 230, 'yellow', 20);


domElement.addElem();



