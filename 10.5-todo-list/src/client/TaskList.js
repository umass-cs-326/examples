/**
 * Creates a task list element with tasks and integrates publishing/subscribing
 * functionality.
 *
 * This function generates a dynamic list of tasks as an unordered list (<ul>)
 * element. Each task can be deleted, which triggers a 'taskDeleted' event using
 * the provided pub/sub system. It also subscribes to 'taskAdded' events to
 * dynamically add tasks to the list when new tasks are published.
 *
 * @param {Object} pubsub - An object with publish/subscribe methods for event
 * handling.
 * @param {Array} tasks - An array of task objects to be initially displayed in
 * the list.
 * @returns {HTMLElement} The task list (<ul>) element with all tasks as list
 * items (<li>).
 */
const TaskList = (pubsub, tasks) => {
  // Create the main list element and set its ID
  const taskList = document.createElement('ul');
  taskList.id = 'taskList';
  taskList.innerHTML = '<h2>Tasks</h2>'; // Add a header to the task list

  // Iterate through each task and create an item for it
  tasks.forEach(task => {
    // Create a list item for the task
    const taskItem = document.createElement('li');

    // Set the inner HTML of the list item, including the task name and a delete
    // button
    console.log(JSON.stringify(task, 2, 2));
    taskItem.innerHTML = `
      ${task.name}
      <button class="deleteButton">Delete</button>
    `;

    // Select the delete button within the current task item
    const deleteButton = taskItem.querySelector('.deleteButton');

    // Add an event listener to the delete button for removing the task item
    deleteButton.addEventListener('click', () => {
      // Remove the task item from the list
      taskList.removeChild(taskItem);

      // Publish a 'taskDeleted' event
      pubsub.publish('taskDeleted', { tasks, task });
    });

    taskList.appendChild(taskItem); // Add the task item to the main task list
  });

  // Subscribe to 'taskAdded' events to dynamically add new tasks
  pubsub.subscribe('taskAdded', ({ tasks, task }) => {
    const taskItem = document.createElement('li'); // Create a new list item for the added task

    // Similar to the above, set the inner HTML and add functionality for the
    // delete button
    taskItem.innerHTML = `
      ${task.name}
      <button class="deleteButton">Delete</button>
    `;
    const deleteButton = taskItem.querySelector('.deleteButton');
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
      pubsub.publish('taskDeleted', { tasks, task });
    });

    taskList.appendChild(taskItem); // Add the new task item to the list
  });

  return taskList; // Return the completed task list element
};

export default TaskList;
