import Server from './Server.js';

/**
 * Represents the ArchiveView component.
 * @param {Object} pubsub - The pubsub object for event handling.
 * @returns {HTMLElement} - The root element of the ArchiveView component.
 */
const ArchiveView = pubsub => {
  const server = Server();

  // Restore archived tasks from storage
  const tasks = server.restoreArchive();

  // Create the root element
  const elm = document.createElement('div');
  elm.id = 'todo-list-view';
  elm.innerHTML = `<div><h1>Archive</h1></div>`;

  // Subscribe to the 'taskDeleted' event
  pubsub.subscribe('taskDeleted', ({ tasks, task }) => {
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
      ${task.name}
    `;

    elm.appendChild(taskItem);
    server.archive(task);
  });

  // Render each task in the archive
  tasks.forEach(task => {
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
      ${task.name}
    `;

    elm.appendChild(taskItem);
  });

  return elm;
};

export default ArchiveView;
