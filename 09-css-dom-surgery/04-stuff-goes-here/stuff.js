// find the div element:
const theDiv = document.getElementById("stuffgoeshere");

// create the element to insert (here, a <P>):
const theP = document.createElement("p");

// add a class to the element:
theP.classList.add("somestyle");

// insert HTML into the element:
// could also have done this as above, but this is generally frowned-upon
//   theP.innerHTML = "Hello, <b>world</b>";
// here's how you do this by creating children:
// make two text nodes, Hello, and world
const helloNode = document.createTextNode("Hello, ");
const worldNode = document.createTextNode("world");

// make a boldface container
const bNode = document.createElement("b");

// add in "world", so you get <B>world</B>
bNode.appendChild(worldNode);

// now add the two children
theP.appendChild(helloNode);
theP.appendChild(bNode);

// finally, add the P as a child of the DIV
theDiv.appendChild(theP);
