import { Calculator } from "./calculator.js";

class BetterCalculator extends Calculator {
  constructor(name) {
    super(name);
  }

  mult() {
    let a = this.stack.pop();
    let b = this.stack.pop();
    this.stack.push(a * b);
  }

  div() {
    let a = this.stack.pop();
    let b = this.stack.pop();
    this.stack.push(b / a);
  }

  run(program) {
    let tokens = program.split(" ");
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (token === "*") {
        this.mult();
      } else if (token === "/") {
        this.div();
      } else if (token === "+") {
        this.add();
      } else if (token === "-") {
        this.sub();
      } else {
        this.enter(parseInt(token));
      }
    }
  }
}

export { BetterCalculator };
