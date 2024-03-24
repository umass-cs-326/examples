const Storage = () => ({
  restore: defaultState => {
    const value = localStorage.getItem('tasks');
    return value ? JSON.parse(value) : defaultState;
  },

  save: state => {
    localStorage.setItem('tasks', JSON.stringify(state));
  },

  archive: state => {
    const value = localStorage.getItem('archive');
    const archive = value ? JSON.parse(value) : [];
    archive.push(state);
    localStorage.setItem('archive', JSON.stringify(archive));
  },

  restoreArchive: () => {
    const value = localStorage.getItem('archive');
    return value ? JSON.parse(value) : [];
  },
});

export default Storage;
