const TaskList = (pubsub, tasks) => {
  const taskList = document.createElement('ul');
  taskList.id = 'taskList';
  taskList.innerHTML = '<h2>Tasks</h2>';

  tasks.forEach(task => {
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
      ${task.name}
      <button class="deleteButton">Delete</button>
    `;

    const deleteButton = taskItem.querySelector('.deleteButton');

    deleteButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
      pubsub.publish('taskDeleted', { tasks, task });
    });

    taskList.appendChild(taskItem);
  });

  pubsub.subscribe('taskAdded', ({ tasks, task }) => {
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
      ${task.name}
      <button class="deleteButton">Delete</button>
    `;

    const deleteButton = taskItem.querySelector('.deleteButton');

    deleteButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
      pubsub.publish('taskDeleted', { tasks, task });
    });

    taskList.appendChild(taskItem);
  });

  return taskList;
};

export default TaskList;
