'use strict';

class Todo {
  constructor(form, input, todoList, todoCompleted, todoContainer) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.todoList = document.querySelector(todoList);
    this.todoCompleted = document.querySelector(todoCompleted);
    this.todoContainer = document.querySelector(todoContainer);
    this.todoData = new Map(JSON.parse(localStorage.getItem('todoList')));
  }

  addToStorage() {
    localStorage.setItem('todoList', JSON.stringify([...this.todoData]));
    
  }

  render() {
    this.todoList.textContent = '';
    this.todoCompleted.textContent = '';
    this.todoData.forEach(this.createItem, this);
    this.addToStorage();
  }

  createItem(todo) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.key = todo.key;
    li.insertAdjacentHTML('beforeend', `
    <span class="text-todo">${todo.value}</span>
				<div class="todo-buttons">
          <button class="todo-edit"></button>
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
				</div>
    `);
    if(todo.completed === true){
      this.todoCompleted.append(li);
    } else {
      this.todoList.append(li);
    }
  }

  addTodo (e) {
    e.preventDefault();
    if(this.input.value === ''){
      alert('Необходимо заполнить поле с задачей');
    }
    if(this.input.value.trim()){
      const newTodo = {
        value: this.input.value,
        completed: false,
        key: this.generateKey()
      };
      this.todoData.set(newTodo.key, newTodo);
      this.render();
    }
  }

  generateKey(){
    return Math.random().toString(36). substring(2,15) + Math.random().toString(36). substring(2,15);
  }

  deleteItem(target){
    this.todoData.forEach((el, index) =>{
      if(el.key === target.parentNode.parentNode.key){
        target.parentNode.parentNode.remove(el);
        this.todoData.delete(index);
      }
    });
    localStorage.setItem('todoList', JSON.stringify([...this.todoData]));
  }

  completedItem(target){
    this.todoData.forEach(el => {
      if(el.key === target.parentNode.parentNode.key && el.completed === false){
        el.completed = true;
      } else if(el.key === target.parentNode.parentNode.key && el.completed === true){
        el.completed = false;
      }
    })
    if(this.todoList.contains(target.parentNode.parentNode)){
      this.todoCompleted.append(target.parentNode.parentNode);
    } else{
      this.todoList.append(target.parentNode.parentNode);
    }
    localStorage.setItem('todoList', JSON.stringify([...this.todoData]));
  }

  clfn(target){
    console.log(target);
  }
  
  disappear(target, callbackFunc){
    let animateInterval;
    let count = 0;
    let animate = () => {
      animateInterval = requestAnimationFrame(animate);
      count = count + 2;
      if(count <= 120){
        target.parentNode.parentNode.style.left = count + '%';
      } else{
        cancelAnimationFrame(animateInterval);
      }
    }
    animateInterval = requestAnimationFrame(animate);
    callbackFunc();
  }

  changeItem(target){
    let newTaskName = prompt('Измените задание');
    this.todoData.forEach(el => {
      if(el.key === target.parentNode.parentNode.key){
        el.value = newTaskName;
        target.parentNode.parentNode.firstElementChild.textContent = newTaskName;
      }
    });
    localStorage.setItem('todoList', JSON.stringify([...this.todoData]));
  }

  handler() {
    this.todoContainer.addEventListener('click', (event) => {
      let target = event.target;
      if(target.classList.contains('todo-remove')){
        this.disappear(target, function(){
          setTimeout(function() {
            todo.deleteItem(target); // Не смог привязать this. Пытался через bind, не получалось
          }, 1000);
        });
      }
      if(target.classList.contains('todo-complete')){
        this.completedItem(target);
      }
      if(target.classList.contains('todo-edit')){
        this.changeItem(target);
      }
      });
  }

  init(){
    this.form.addEventListener('submit', this.addTodo.bind(this));
    this.render();
    this.handler();
  }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed', '.todo-container');

todo.init();
