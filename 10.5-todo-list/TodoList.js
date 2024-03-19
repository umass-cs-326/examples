const TodoList = (textInput, taskList) => {
  const todoList = document.createElement('div');
  todoList.innerHTML = '<h1>Todo List</h1>';
  todoList.appendChild(textInput);
  todoList.appendChild(taskList);
  return todoList;
};

export default TodoList;
