const Task = (name) => ({
  name,
  id: Math.random().toString(36),
});

export default Task;
