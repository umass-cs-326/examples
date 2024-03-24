import Task from './Task.js';

/**
 * Defines a UI component for text input.
 * @param {Object} pubsub - The pubsub object for event handling.
 * @param {Array} tasks - The array of tasks.
 * @returns {HTMLElement} - The container element for the text input component.
 */
const TextInput = (pubsub, tasks) => {
  const container = document.createElement('div');
  container.id = 'input-container';

  const body = `
      <div>
        <input type="text" id="taskInput" placeholder="Add a new task" />
        <button id="addTaskButton">Add</button>
      </div>
  `;

  container.innerHTML = body;

  /**
   * Adds a new task to the task list.
   */
  const addTaskToList = () => {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value;

    if (!taskName) {
      return;
    } else {
      taskInput.value = '';
      const task = Task(taskName);
      pubsub.publish('taskAdded', { tasks, task });
    }
  };

  container
    .querySelector('#addTaskButton')
    .addEventListener('click', addTaskToList);

  // Add event listener to the task input for the 'keyup' event
  container.querySelector('#taskInput').addEventListener('keyup', event => {
    // Check if the 'Enter' key was pressed
    if (event.key === 'Enter') {
      // Call the addTaskToList function
      addTaskToList();
    }
  });

  return container;
};

export default TextInput;
