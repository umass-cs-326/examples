import App from './App.js';

App('root');

// Testing Support
const resetState = () => {
  localStorage.clear();
  App('root');
};

document.getElementById('reset-state').addEventListener('click', resetState);
