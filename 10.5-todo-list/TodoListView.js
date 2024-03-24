import TodoList from './TodoList.js';

const TodoListView = pubsub => {
  const elm = document.createElement('div');
  elm.id = 'todo-list-view';
  elm.innerHTML = `
    <h1>Todo List</h1>
  `;

  const todoList = TodoList(pubsub);
  elm.appendChild(todoList);

  return elm;
};

export default TodoListView;
