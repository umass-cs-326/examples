import App from './App.js';

// Mount the application to the root element.
App('root');

// Testing Support
const resetState = () => {
  localStorage.clear();
  App('root');
};

document.getElementById('reset-state').addEventListener('click', resetState);
