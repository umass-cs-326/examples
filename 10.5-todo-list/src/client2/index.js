import { App } from './App.js';

// Mount the application to the root element.
const root = document.getElementById('root');
const app = new App();
app.render(root);

// Testing Support
const resetState = () => {
  localStorage.clear();
  app.render(root);
};

document.getElementById('reset-state').addEventListener('click', resetState);
