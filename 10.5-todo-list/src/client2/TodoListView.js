export class TodoListView {
  constructor() {}

  render(root) {
    // Create the root element
    const elm = document.createElement('div');
    elm.id = 'todo-list-view';

    // Set the inner HTML of the root element
    elm.innerHTML = `
      <h1>Todo List</h1>
      <div id="todo-list-container"></div>
    `;

    const todoListContainer = elm.querySelector('#todo-list-container');

    // Create a TodoList component and append it to the root element
    const todoList = new TodoList();
    todoList.render(todoListContainer);

    // Render the element
    root.appendChild(elm);
  }
}

class TodoList {
  constructor() {
    this.tasks = [new Task('Task 1'), new Task('Task 2')];
    this.textInput = new TextInput();
    this.taskList = new TaskList();
  }

  render(root) {
    // Set the root element
    this.root = root;

    // Create the root element
    this.elm = document.createElement('div');
    this.elm.id = 'todo-list';

    const textInput = new TextInput();
    textInput.render(this.elm, this);

    const taskList = new TaskList();
    taskList.render(this.elm, this.tasks);

    // Render the element
    root.appendChild(this.elm);
  }

  addTask(task) {
    this.tasks.push(task);
    this.taskList.render(this.elm, this.tasks);
  }
}

class TextInput {
  constructor() {}

  render(root, todoList) {
    // Create the root element
    const elm = document.createElement('div');
    elm.id = 'text-input';

    // Set the inner HTML of the root element
    elm.innerHTML = `
      <input id="task-input" type="text" placeholder="Enter a task" />
      <button id="task-input-button">Add Task</button>
    `;

    const taskInput = elm.querySelector('#task-input');
    const taskInputButton = elm.querySelector('#task-input-button');

    taskInputButton.addEventListener('click', () => {
      this.#addTaskToList(todoList, taskInput);
    });

    taskInput.addEventListener('keyup', event => {
      if (event.key === 'Enter') {
        this.#addTaskToList(todoList, taskInput);
      }
    });

    // Render the element
    root.appendChild(elm);
  }

  #addTaskToList(todoList, taskInput) {
    todoList.addTask(new Task(taskInput.value));
    taskInput.value = '';
  }
}

class TaskList {
  constructor() {
    const elm = document.createElement('div');
    elm.id = 'task-list';
  }

  render(root, tasks) {
    // Set the inner HTML of the root element
    this.elm.innerHTML = `
      <ul>
        ${tasks.map(task => `<li>${task.name}</li>`).join('')}
      </ul>
    `;

    // Render the element
    root.appendChild(elm);
  }
}

class Task {
  constructor(name) {
    this.name = name;
    this.id = Math.random().toString(36);
  }
}
