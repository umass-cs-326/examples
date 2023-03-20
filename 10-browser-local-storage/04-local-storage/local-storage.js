class App {
  constructor() {
    const state = new State();
    this.header = new Header();
    this.textarea = new TextArea(state);
    this.button = new Button(this.textarea);
  }

  render() {
    const element = document.createElement('div');
    element.appendChild(this.header.render());
    element.appendChild(this.textarea.render());
    element.appendChild(this.button.render());
    return element;
  }
}

class Header {
  render() {
    const header = document.createElement('h1');
    header.textContent = 'Local Storage';
    return header;
  }
}

class TextArea {
  element = null;

  constructor(state) {
    this.state = state;
  }

  render() {
    const textarea = document.createElement('textarea');
    textarea.id = 'writing_area';
    textarea.rows = 10;
    textarea.cols = 50;
    textarea.value = this.state.get();
    textarea.addEventListener('keyup', (e) => this.keyup(e));
    this.element = textarea;
    return textarea;
  }

  keyup(e) {
    this.state.set(e.target.value);
  }

  clear() {
    this.state.set('');
    this.element.value = '';
  }
}

class Button {
  constructor(textarea) {
    this.textarea = textarea;
  }

  render() {
    const button = document.createElement('input');
    button.type = 'button';
    button.value = 'Clear';
    button.addEventListener('click', () => this.textarea.clear());
    const block = document.createElement('div');
    block.appendChild(button);
    return block;
  }
}

class State {
  get() {
    const v = window.localStorage.getItem('state');
    return v ? v : '';
  }

  set(value) {
    window.localStorage.setItem('state', value);
  }
}

function main() {
  const app = new App();
  const root = document.getElementById('app');
  root.appendChild(app.render());
}

main();
