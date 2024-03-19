const TaskList = (deleteTask, tasks) => {
  const taskList = document.createElement('ul');
  taskList.id = 'taskList';
  taskList.innerHTML = '<h2>Tasks</h2>';

  tasks.forEach((task) => {
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
      ${task.name}
      <button class="deleteButton">Delete</button>
    `;

    taskItem.querySelector('.deleteButton').addEventListener('click', () => {
      taskList.removeChild(taskItem);
      deleteTask(tasks, task);
    });

    taskList.appendChild(taskItem);
  });

  return taskList;
};

export default TaskList;
