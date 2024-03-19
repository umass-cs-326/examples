// Defines a UI component for text input

const TextInput = (addTask, tasks) => {
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
      addTask(tasks, taskName);
    }
  };

  container
    .querySelector('#addTaskButton')
    .addEventListener('click', addTaskToList);

  return container;
};

export default TextInput;
