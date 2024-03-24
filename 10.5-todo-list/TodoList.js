import Task from './Task.js';
import TextInput from './TextInput.js';
import TaskList from './TaskList.js';
import Storage from './Storage.js';
import PubSub from './PubSub.js';

const TodoList = pubsub => {
  const storage = Storage();

  // Restore the tasks from local storage or use the provided default tasks.
  const tasks = storage.restore([
    Task('Learn about Web Components'),
    Task('Go for a walk'),
  ]);

  // Used to reference the dom element for this UI component.
  let elm = document.createElement('div');
  elm.innerHTML = '';
  elm.id = 'todolist';

  pubsub.subscribe('taskAdded', ({ tasks, task }) => {
    storage.save([...tasks, task]);
  });

  pubsub.subscribe('taskDeleted', ({ tasks, task }) => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    storage.save(tasks);
  });

  const input = TextInput(pubsub, tasks);
  const list = TaskList(pubsub, tasks);

  elm.appendChild(input);
  elm.appendChild(list);

  return elm;
};

export default TodoList;
