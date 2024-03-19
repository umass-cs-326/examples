import Task from './Task.js';
import TextInput from './TextInput.js';
import TaskList from './TaskList.js';
import TodoList from './TodoList.js';
import Storage from './Storage.js';

const App = mountPoint => {
  const storage = Storage();

  const tasks = storage.restore([
    Task('Learn about Web Components'),
    Task('Go for a walk'),
  ]);

  const addTask = (tasks, task) => {
    mount([...tasks, Task(task)]);
  };

  const deleteTask = (tasks, task) => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    mount(tasks);
  };

  const mount = tasks => {
    const textInput = TextInput(addTask, tasks);
    const taskList = TaskList(deleteTask, tasks);
    const todoList = TodoList(textInput, taskList);
    const mount = document.getElementById(mountPoint);
    mount.innerHTML = '';
    mount.appendChild(todoList);
    storage.save(tasks);
  };

  mount(tasks);
};

export default App;
