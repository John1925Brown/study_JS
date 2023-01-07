const collections = document.querySelectorAll('.collection');
const elems = document.querySelectorAll('.elem');
const secondHead = document.getElementById('second-head');
const thirdHead = document.getElementById('third-head');
console.log(collections);
console.log(elems);

elems[3].remove(); // Удаление элемента
// Но не удаляется из переменной. То есть их можно вставить в другое место

collections[1].append(elems[3]); // Перемещение в конец родителя
collections[1].prepend(elems[2]);// Перемещение в начало родителя

collections[0].before(collections[1]); // Элемент, что мы передали, становится перед тем, что указали

elems[2].after(elems[4]); // Элемент, что мы передали, становится после того, что указали

elems[3].replaceWith(elems[5]); //Удаляет указанный элемент и вставляет переданный

const elemClone = elems[2].cloneNode(true); // Клонирование элемента. Если передать true, до будет полная копия, иначе - неполная

collections[1].append(elemClone);
elemClone.classList.add('elem--clone');
elemClone.textContent = 'New elem'; // Изменить текст

elems[2].textContent = 'Hello';
elems[2].innerHTML = '<span>Hello</span>' // Можно полноценно изменять элементы, например добавлять теги
// Но затирается вся верстка, так как не просто добавляется элемент, а изменяется уже написанный

const newElem = document.createElement('li'); // Создает новый элемент. Передается тег. Но после создания он осается только в памяти в js, нужно еще его добавить на страницу
newElem.textContent = 'New element';
elems[4].after(newElem);

secondHead.insertAdjacentText('beforebegin', 'beforebegin'); // Вставляет текст до указанного элемента
secondHead.insertAdjacentText('afterend', 'afterend'); // Вставляет текст после указанного элемента
secondHead.insertAdjacentText('afterbegin', 'afterbegin'); // Вставляет текст в указанный элемент до начала текста внутри
secondHead.insertAdjacentText('beforeend', 'beforeend'); // Вставляет текст в указанный элемент в конец текста внутри

// thirdHead.insertAdjacentElement('beforebegin', elems[1]); // Вставляет элемент до указанного элемента
// thirdHead.insertAdjacentElement('afterend', elems[2]); // Вставляет элемент после указанного элемента
// thirdHead.insertAdjacentElement('afterbegin', elems[0]); // Вставляет элемент после указанного элемента внутри
// thirdHead.insertAdjacentElement('beforeend', elems[5]); // Вставляет элемент после указанного элемента внутри


thirdHead.insertAdjacentHTML('beforebegin', '<h3>beforebegin</h3>'); // Вставляет тег до указанного элемента
thirdHead.insertAdjacentHTML('afterend', '<h3>afterend</h3>'); // Вставляет тег после указанного элемента
thirdHead.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>'); // Вставляет тег после указанного элемента внутри
thirdHead.insertAdjacentHTML('beforeend', '<p>beforeend</p>'); // Вставляет тег после указанного элемента внутри

