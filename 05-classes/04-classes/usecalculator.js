import { Calculator } from "./calculator.js";

console.log(Calculator.count);

let c1 = new Calculator("My Calculator");
console.log(Calculator.count);

c1.print();

c1.top = 10;

c1.print();
