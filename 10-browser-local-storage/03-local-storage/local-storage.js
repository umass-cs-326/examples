// Creates a dom node given a tag (string), attrs (key/value pairs of
// attributes), and children (array of child nodes).
// Returns a dom node.
const makeElm = (tag, attrs, children) => {
  const e = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    e.setAttribute(key, value);
  }
  children.forEach((c) => e.appendChild(c));
  return e;
};

// Creates and returns a text node given a string.
const text = (s) => document.createTextNode(s);

// Returns a function that creates a dom node given a tag (string).
const maker =
  (tag) =>
  (attrs, ...children) =>
    makeElm(tag, attrs, children);

// Create functions for creating dom elements.
const div = maker('div');
const h1 = maker('h1');
const textarea = maker('textarea');
const input = maker('input');

const App = () => {
  const header = h1({}, text('Local Storage')),
    textarea = TextArea(),
    button = Button();
  return div({ id: 'app' }, header, textarea, button);
};

const TextArea = () => {
  const ta = textarea({ id: 'writing_area', rows: 10, cols: 50 });
  ta.value = window.localStorage.getItem('writing_area');

  ta.addEventListener('keyup', (e) => {
    const value = e.target.value;
    window.localStorage.setItem('writing_area', value);
  });
  return ta;
};

const Button = () => {
  const button = input({ type: 'button', value: 'Clear' });
  button.addEventListener('click', () => {
    window.localStorage.removeItem('writing_area');
    document.getElementById('writing_area').value = '';
  });
  return div({}, button);
};

document.getElementById('root').appendChild(App());
