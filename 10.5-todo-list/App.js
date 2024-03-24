import ArchiveView from './ArchiveView.js';
import TodoListView from './TodoListView.js';
import NavBar from './NavBar.js';
import PubSub from './PubSub.js';

/**
 * Mounts the application to the specified element and sets up the app
 * structure, views, navigation, and initial view.
 *
 * @param {string} mount - The ID of the element where the app will be mounted.
 */
const App = mount => {
  // Capture the root element. This is where the app will be mounted.
  const root = document.getElementById(mount);

  // Create the app structure. This includes the navbar and the main view.
  root.innerHTML = `<div id="app">
      <div id="navbar"></div>
      <div id="main-view"></div>
    </div >`;

  // Capture the navbar and main view elements.
  const navbarElm = document.getElementById('navbar');
  const viewElm = document.getElementById('main-view');

  // Create the pubsub instance. This will be used to communicate between the
  // views. It is passed to the views so they can publish and subscribe to
  // events. This is a simple way to implement a basic event system.
  const pubsub = PubSub();

  // Create the views.
  const todolist = TodoListView(pubsub);
  const archive = ArchiveView(pubsub);

  // Navigate to the view based on the hash. If no hash is present, default to
  // the todolist view.
  const navigateTo = view => {
    viewElm.innerHTML = '';
    if (view === 'todolist') {
      viewElm.appendChild(todolist);
      window.location.hash = view;
    } else if (view === 'archive') {
      viewElm.appendChild(archive);
      window.location.hash = view;
    } else {
      viewElm.appendChild(todolist);
      window.location.hash = 'todolist';
    }
  };

  // Create the navigation bar. This will allow the user to switch between the
  // views.
  const navbar = NavBar(navigateTo);

  // Append the navbar to the navbar element.
  navbarElm.appendChild(navbar);

  // Navigate to the initial view.
  navigateTo('todolist');
};

export default App;
