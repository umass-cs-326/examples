import { Calculator } from "./calculator.js";
import { BetterCalculator } from "./bettercalculator.js";

console.log(Calculator.count);

let c1 = new Calculator("My Calculator");
console.log(Calculator.count);

c1.print();

c1.top = 10;

c1.print();

let b1 = new BetterCalculator("My Better Calculator");
b1.enter(4);
b1.print();
b1.enter(5);
b1.print();
b1.mult();
b1.print();

b1.run("5 5 * 3 - /");
b1.print();
