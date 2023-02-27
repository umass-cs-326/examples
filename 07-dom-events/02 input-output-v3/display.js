// Assign event handlers to events.
const button = document.getElementById("go-button");

// All event listeners are passed an event object. There are various things you
// can do with this object.
button.addEventListener("click", function (event) {
  const input = document.getElementById("input"),
    output = document.getElementById("output"),
    result = display(input.value);
  output.value = result;

  // We prevent any default behavior that might occur. In this case, the default
  // is nothing. If it was a link, it would navigate to a new page.
  event.preventDefault();
});

function display(input) {
  return input.toUpperCase();
}
