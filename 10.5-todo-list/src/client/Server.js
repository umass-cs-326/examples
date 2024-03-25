/**
 * Storage module for managing tasks and archive in local storage.
 * @returns {Object} Storage object with methods.
 */
const Server = () => ({
  /**
   * Restores tasks from local storage or returns default state.
   * @param {Array} defaultState - The default state to return if no tasks are
   * found in local storage.
   * @returns {Array} The restored tasks or the default state.
   */
  restore: defaultState => {
    const value = localStorage.getItem('tasks');
    return value ? JSON.parse(value) : defaultState;
  },

  /**
   * Saves tasks to local storage.
   * @param {Array} state - The tasks to be saved.
   */
  save: state => {
    localStorage.setItem('tasks', JSON.stringify(state));
  },

  /**
   * Archives a task by adding it to the archive in local storage.
   * @param {Object} state - The task to be archived.
   */
  archive: state => {
    const value = localStorage.getItem('archive');
    const archive = value ? JSON.parse(value) : [];
    archive.push(state);
    localStorage.setItem('archive', JSON.stringify(archive));
  },

  /**
   * Restores archived tasks from local storage.
   * @returns {Array} The restored archived tasks.
   */
  restoreArchive: () => {
    const value = localStorage.getItem('archive');
    return value ? JSON.parse(value) : [];
  },
});

export default Server;
