// Assign event handlers to events.
const input = document.getElementById("input");
const output = document.getElementById("output");

// With the button removed, we add an event listener to the input element. The
// "keyup" event is triggered when a key is released. This causes our event
// handler to be invoked.
input.addEventListener("keyup", function (event) {
  // Call the display function with the input value and assign the result to the
  // output.
  const result = display(input.value);
  output.value = result;

  // Change the text and background color based on the result.
  if (result === "") {
    // All elements have a style property that allows us to set CSS properties.
    // We will talk more above CSS later.
    output.style.backgroundColor = "white";
    output.style.color = "black";
  } else {
    output.style.backgroundColor = "yellow";
    output.style.color = "red";
  }

  // No need to prevent the default behavior as there isn't any.
});

function display(input) {
  return input.toUpperCase();
}
