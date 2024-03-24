import Storage from './Storage.js';

const ArchiveView = pubsub => {
  const storage = Storage();

  const tasks = storage.restoreArchive();

  const elm = document.createElement('div');
  elm.id = 'todo-list-view';
  elm.innerHTML = `<div><h1>Archive</h1></div>`;

  pubsub.subscribe('taskDeleted', ({ tasks, task }) => {
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
      ${task.name}
    `;

    elm.appendChild(taskItem);
    storage.archive(task);
  });

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
