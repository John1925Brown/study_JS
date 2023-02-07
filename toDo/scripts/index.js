let todoControl = document.querySelector('.todo-control');
let headerInput = document.querySelector('.header-input');
let todoList = document.querySelector('.todo-list');
let todoCompleted = document.querySelector('.todo-completed');
let btnAddTask = document.querySelector('.header-button');
let todoData = [];

let render = function () {
  todoList.textContent = '';
  todoCompleted.textContent = '';
  todoData.forEach((item, index) => {
    let li = document.createElement('li');
    li.classList.add('todo-item', 'todo-item_' + index);
    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
      '<div class="todo-buttons">' + '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' + '</div>';
    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }
    let BtnTodoComplete = li.querySelector('.todo-complete');
    let BtnTodoRemove = li.querySelector('.todo-remove');
    BtnTodoRemove.addEventListener('click', function () {
      li.remove(item);
      todoData.splice(index, 1);
      localStorage.setItem('todo', JSON.stringify(todoData));
    });
    BtnTodoComplete.addEventListener('click', function () {
      item.completed = !item.completed;
      localStorage.setItem('todo', JSON.stringify(todoData));
      render();
    });
  });
};

if (localStorage.getItem('todo')) {
  todoData = JSON.parse(localStorage.getItem('todo'));
  render();
};

todoControl.addEventListener('submit', function (e) {
  e.preventDefault();
  if (headerInput.value === '') {
    alert('Заполните поле задачи');
  } else {
    let newTodo = {
      value: headerInput.value,
      completed: false
    };
    todoData.push(newTodo);
    headerInput.value = '';
    console.log(todoData);
    localStorage.setItem('todo', JSON.stringify(todoData));
    render();
  }
});

render();
