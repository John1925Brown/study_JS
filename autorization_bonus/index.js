let username = document.querySelector('#username');
let registerUserBtn = document.querySelector('#registerUser');
let loginInBtn = document.querySelector('#loginin');
let list = document.querySelector('#list');
let users = [];
let names;
let firstName;
let lastName;
let login;
let pass;

if(localStorage.getItem('users')){
  users = JSON.parse(localStorage.getItem('users'));
  displayUserFunc();
};

let registrationFunc = function() { 
  let newUser = {
    names,
    login,
    pass,
    firstName,
    lastName,
    timeAdd: new Date()
  };
  
  let namesFunc = function(){
    newUser.names = prompt('Введите имя и фамилию через пробел');
    if(newUser.names === ''){
      alert('Вы ничего не ввели. Введите имя и фамилию через пробел');
      namesFunc();
    } else if(newUser.names.trim().split(' ').length !== 2){
      alert('Введите имя и фамилию через пробел');
      namesFunc();
    }
  };
  
  let loginFunc = function(){
    newUser.login = prompt('Придумайте логин').trim();
    if(newUser.login === ''){
      alert('Вы ничего не ввели. Придумайте логин');
      loginFunc();
    };
      users.forEach(function(item,index){
        if(item.login.trim() === newUser.login.trim()){
          alert('Пользователь с таким логином уже существует. Придумайте другой логин');
          loginFunc();
        }
      });
  };
  
  let passFunc = function(){
    newUser.pass = prompt('Придумайте пароль');
    if(newUser.pass === ''){
      alert('Вы ничего не ввели. Придумайте пароль');
      passFunc();
    };
  };

  namesFunc();
  loginFunc();
  passFunc();

  let options = {
    month: 'long', // Не могу понять, почему не склоняется месяц. Можно прописать массивом названия месяца, но в инете нашел более удобный способ
  };
  newUser.timeAdd = `${newUser.timeAdd.getDate()} ${newUser.timeAdd.toLocaleString('ru-RU', options)} ${newUser.timeAdd.getFullYear()} г., ${newUser.timeAdd.getHours()}:${newUser.timeAdd.getMinutes()}:${newUser.timeAdd.getSeconds()}`;
  newUser.firstName = newUser.names.split(' ')[0];
  newUser.lastName = newUser.names.split(' ')[1];

  users.push(newUser);
  displayUserFunc();
  localStorage.setItem('users', JSON.stringify(users));
  location.reload(); // Добавил, потому что, если не перезагрузить страницу, нельзя сразу же нажать на кнопку удалить и удалить пользователя(грубо говоря, это не работает без перезагрузки). Не знаю, насколько правильно добавлять перезагрузку, может есть другой способ лучше?
};

let loginInFunc = function () {
  let enterLogin = prompt('Введите логин');
  let enterPass = prompt('Введите пароль');
  users.forEach(function(item,index){
    if(item.login !== enterLogin || item.pass !== enterPass){
      alert('Неверный логин или пароль!');
    } else if(item.login === enterLogin && item.pass === enterPass){
      username.innerHTML = item.firstName;
    }
  });
};

function displayUserFunc(){
  let displayUser = '';
  users.forEach(function(item, index){
    displayUser += `<li class="user__${index}">
    Имя: ${users[index].firstName}, фамилия: ${users[index].lastName}, время регистрации: ${users[index].timeAdd} <img class="deleteBtn" src="img/delete.png">
    </li>`; // Не знаю как правильно реализовать. Форычем пробегается по каждому и будет записывать всегда последнее значение в users[index].firstName и остальные
    list.innerHTML = displayUser;
  });
};

registerUserBtn.addEventListener('click', registrationFunc);
loginInBtn.addEventListener('click', loginInFunc);

let deleteBtns = document.querySelectorAll('.deleteBtn');

deleteBtns.forEach(function(item,index){
  deleteBtns[index].addEventListener('click',function () {
    item.parentNode.remove();
    users.splice(users[index],1);
    localStorage.setItem('users', JSON.stringify(users));
    });
});
