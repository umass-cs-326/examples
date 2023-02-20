class Calculator {
  // Class variable.
  static count = 0;

  static numCalculators() {
    return Calculator.count;
  }

  // Instance variable.
  stack = [];

  constructor(name) {
    Calculator.count++;
    this.name = name;
  }

  print() {
    console.log(`Calculator ${this.name} has state ${this.state}`);
  }

  get state() {
    return this.stack.join(", ");
  }

  set top(value) {
    let t = this.stack.pop();
    this.stack.push(value);
  }

  enter(value) {
    this.stack.push(value);
  }

  add() {
    let a = this.stack.pop();
    let b = this.stack.pop();
    this.stack.push(a + b);
  }

  sub() {
    let a = this.stack.pop();
    let b = this.stack.pop();
    this.stack.push(b - a);
  }
}

export { Calculator };
