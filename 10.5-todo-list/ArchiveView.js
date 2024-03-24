import Storage from './Storage.js';

/**
 * Represents the ArchiveView component.
 * @param {Object} pubsub - The pubsub object for event handling.
 * @returns {HTMLElement} - The root element of the ArchiveView component.
 */
const ArchiveView = pubsub => {
  const storage = Storage();

  // Restore archived tasks from storage
  const tasks = storage.restoreArchive();

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
    storage.archive(task);
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
