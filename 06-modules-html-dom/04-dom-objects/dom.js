"use strict";

// You can search the DOM for elements by their ID.
// This returns a single element object.
let p1 = document.getElementById("p1");
console.log(p1);

// You can search the DOM for elements by their class.
// This returns an array of element objects.
let p2 = document.getElementsByClassName("important");
console.log(p2);

// You can search the DOM for elements by their tag name.
// This returns an array of element objects.
let p3 = document.getElementsByTagName("p");
console.log(p3);

// We can change the contents of an element.
p1.innerHTML = "<b>Hello, world!</b>";

// We can also create new elements.
let newText = document.createTextNode("HELLO, WORLD!");
let newP = document.createElement("p");
newP.appendChild(newText);
document.body.appendChild(newP);

// We can also remove elements.
// p1.remove();
