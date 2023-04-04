import * as http from 'http';
import * as url from 'url';

// The purpose of this server is to maintain a single data object of a person
// and their age. This data object is stored in the global variable `data`.

// Data maintained by this server.
const data = {
  name: 'John',
  age: 30,
};

// A basic server function to implement a simple RESTful API.
function basicServer(request, response) {
  // First, we need to parse the URL.
  const parsedUrl = url.parse(request.url, true);

  // Assign the pathname to a variable - to make things shorter.
  const pathname = parsedUrl.pathname;

  // Get the query options (if any).
  //   - The query options are part of the URL structure.
  //   - Example: http://localhost:3000/read?name=John&age=30
  //   - The query options are stored in the query object that is
  //     populated by the `url.parse()` function.
  const query = parsedUrl.query;

  // Now, we want to determine what to do with the request.
  // We will provide three REST end-points in this basic server:
  //   - /person/json
  //       => Returns the data in JSON format.
  //   - /person/html
  //       => Returns the data in HTML format.
  //   - /person?name=NAME&age=AGE
  //       => Updates the data with the given name and age.

  // We will use the string's startsWith() method to determine what to do.
  if (pathname.startsWith('/person/json')) {
    // Return the data in JSON format.
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(data));
    response.end();
  } else if (pathname.startsWith('/person/html')) {
    // Return the data in HTML format.
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(`<h1>${data.name}</h1>`);
    response.write(`<p>Age: ${data.age}</p>`);
    response.end();
  } else if (pathname.startsWith('/person')) {
    // Update the data with the given name and age.
    data.name = query.name;
    data.age = query.age;
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(JSON.stringify(data));
    response.end();
  } else {
    // Respond with an error message and information.
    response.writeHead(400, { 'Content-Type': 'text/html' });
    response.write(`<h1>Bad Request</h1>`);
    response.write('<p>The pathname is not recognized.</p>');
    response.write(`<p>${pathname}</p>`);
    response.write('<p>Expected pathnames:</p>');
    response.write('<ul>');
    response.write('<li>/person/json</li>');
    response.write('<li>/person/html</li>');
    response.write('<li>/person?name=NAME&age=AGE</li>');
    response.write('</ul>');
    response.end();
  }
}

// Start the server on port 3000.
http.createServer(basicServer).listen(3000, () => {
  console.log('Server started on port 3000');
});
