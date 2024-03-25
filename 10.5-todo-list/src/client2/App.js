import { PubSub } from './PubSub.js';
import { TodoListView } from './TodoListView.js';

export class App {
  constructor() {
    this.pubsub = new PubSub();
    this.todolistView = new TodoListView();
  }

  render(root) {
    root.innerHTML = `<div id="app">
      <div id="navbar"></div>
      <div id="main-view"></div>
    </div >`;

    const navbarElm = document.getElementById('navbar');
    const viewElm = document.getElementById('main-view');

    this.todolistView.render(viewElm);
  }

  #navigateTo(view) {
    this.viewElm.innerHTML = '';
    if (view === 'todolist') {
      this.viewElm.appendChild(this.todolist);
      window.location.hash = view;
    } else if (view === 'archive') {
      this.viewElm.appendChild(this.archive);
      window.location.hash = view;
    } else {
      this.viewElm.appendChild(this.todolist);
      window.location.hash = 'todolist';
    }
  }
}
