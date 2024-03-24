import TodoList from './TodoList.js';

/**
 * Creates a TodoListView component.
 * @param {Object} pubsub - The pubsub object for event communication.
 * @returns {HTMLElement} - The root element of the TodoListView.
 */
const TodoListView = pubsub => {
  // Create the root element
  const elm = document.createElement('div');
  elm.id = 'todo-list-view';
  
  // Set the inner HTML of the root element
  elm.innerHTML = `
    <h1>Todo List</h1>
  `;

  // Create a TodoList component and append it to the root element
  const todoList = TodoList(pubsub);
  elm.appendChild(todoList);

  // Return the root element
  return elm;
};

export default TodoListView;
