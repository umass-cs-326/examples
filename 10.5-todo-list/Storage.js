const Storage = (state) => ({
  restore: (defaultState) => {
    const value = localStorage.getItem('tasks');
    return value ? JSON.parse(value) : defaultState;
  },

  save: (state) => {
    localStorage.setItem('tasks', JSON.stringify(state));
  },
});

export default Storage;
