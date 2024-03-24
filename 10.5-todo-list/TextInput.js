import Task from './Task.js';

// Defines a UI component for text input
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

  container.querySelector('#taskInput').addEventListener('keyup', event => {
    if (event.key === 'Enter') {
      addTaskToList();
    }
  });

  return container;
};

export default TextInput;
