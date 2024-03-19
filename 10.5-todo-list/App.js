import Task from './Task.js';
import TextInput from './TextInput.js';
import TaskList from './TaskList.js';
import TodoList from './TodoList.js';
import Storage from './Storage.js';

const App = mountPoint => {
  const storage = Storage();

  // Restore the tasks from local storage or use the provided default tasks.
  const tasks = storage.restore([
    Task('Learn about Web Components'),
    Task('Go for a walk'),
  ]);

  // Get the mount point.
  const mountDom = document.getElementById(mountPoint);

  // Used to reference the dom element for this UI component.
  let dom = document.createElement('div');
  dom.id = 'App';

  const addTask = (tasks, task) => {
    mount([...tasks, Task(task)]);
  };

  const deleteTask = (tasks, task) => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    mount(tasks);
  };

  const mount = tasks => {
    // Build the UI components.
    const textInput = TextInput(addTask, tasks);
    const taskList = TaskList(deleteTask, tasks);
    const todoList = TodoList(textInput, taskList);
    dom.innerHTML = '';
    dom.appendChild(todoList);

    // Add the UI component dom to the mount point.
    mountDom.innerHTML = '';
    mountDom.appendChild(dom);
    storage.save(tasks);
  };

  mount(tasks);
};

export default App;
