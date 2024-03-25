import Task from './Task.js';
import TextInput from './TextInput.js';
import TaskList from './TaskList.js';
import Server from './Server.js';
import PubSub from './PubSub.js';

/**
 * Represents a TodoList component.
 * @param {PubSub} pubsub - The PubSub instance for event handling.
 * @returns {HTMLElement} - The root element of the TodoList component.
 */
const TodoList = pubsub => {
  const server = Server();

  // Restore the tasks from local storage or use the provided default tasks.
  const tasks = server.restore([
    Task('Learn about Web Components'),
    Task('Go for a walk'),
  ]);

  // Used to reference the dom element for this UI component.
  let elm = document.createElement('div');
  elm.innerHTML = '';
  elm.id = 'todolist';

  /**
   * Event handler for when a task is added.
   * @param {Object} data - The event data containing the tasks and the new
   * task.
   */
  pubsub.subscribe('taskAdded', ({ tasks, task }) => {
    server.save([...tasks, task]);
  });

  /**
   * Event handler for when a task is deleted.
   * @param {Object} data - The event data containing the tasks and the task to
   * be deleted.
   */
  pubsub.subscribe('taskDeleted', ({ tasks, task }) => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    server.save(tasks);
  });

  const input = TextInput(pubsub, tasks);
  const list = TaskList(pubsub, tasks);

  elm.appendChild(input);
  elm.appendChild(list);

  return elm;
};

export default TodoList;
