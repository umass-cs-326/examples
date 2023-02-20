"use strict";
// It turns out that we do not need to use strict mode in this file because
// modules automatically use strict mode.

const person = {
  name: "John",
  age: 30,
};

function getName() {
  return person.name;
}

function setName(name) {
  person.name = name;
}

function print() {
  console.log(`${person.name} is ${person.age} years old.`);
}

export { getName, setName, print };
