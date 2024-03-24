/**
 * Creates a navigation bar element with links to different views.
 *
 * This function dynamically creates a <div> element containing a navigation bar
 * (navbar) with links. When a link is clicked, it prevents the default anchor
 * tag behaviour, updates the window's hash to reflect the current view, and
 * calls the `navigateTo` function with the view's name.
 *
 * @param {Function} navigateTo - The function to call when a link is clicked.
 * It should accept a string argument representing the view name.
 *
 * @returns {HTMLElement} The navbar element populated with links.
 */
const NavBar = navigateTo => {
  // Create a <div> element to hold the navigation bar
  const elm = document.createElement('div');
  elm.id = 'navbar';

  // Populate the <div> element with the navigation links
  elm.innerHTML = `
    <ul>
      <li><a href="#todolist">Todo List</a></li>
      <li><a href="#archive">Archive</a></li>
    </ul>
  `;

  // Get all the anchor tags within the <div> element
  const links = elm.querySelectorAll('a');

  // Add event listeners to each anchor tag
  links.forEach(link => {
    link.addEventListener('click', e => {
      // Prevent the default anchor tag behavior
      e.preventDefault();

      // Get the view name from the href attribute
      const view = e.target.getAttribute('href').replace('#', '');

      // Update the window's hash to reflect the current view
      window.location.hash = view;
      
      // Call the navigateTo function with the view name
      navigateTo(view);
    });
  });

  // Return the populated navigation bar element
  return elm;
};

export default NavBar;
