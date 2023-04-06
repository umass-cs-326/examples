import * as http from 'http';
import * as url from 'url';
import * as crud from './crud.js';

// The purpose of this server is to maintain a single data object of a person
// and their age. This data object is stored in the global variable `data`.

// Data maintained by this server.
const data = {
  name: 'John',
  age: 30,
};

// A basic server function to implement a simple RESTful API.
async function basicServer(request, response) {
  // Parse the URL to get the pathname and the query parameters.
  const parsedUrl = url.parse(request.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Grab the HTTP method.
  const method = request.method;

  // Implement each of the CRUD operations.
  //   NOTE: for clarity we have not implemented any error checking. You will
  //         need to add error checking in your team project.
  if (method === 'POST' && pathname.startsWith('/person/create')) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    const person = await crud.createPerson(query.name, query.age);
    response.write(JSON.stringify(person));
    response.end();
  } else if (method === 'GET' && pathname.startsWith('/person/read')) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    const person = await crud.readPerson(query.name);
    response.write(JSON.stringify(person));
    response.end();
  } else if (method === 'PUT' && pathname.startsWith('/person/update')) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    const person = await crud.updatePerson(query.name, query.age);
    response.write(JSON.stringify(person));
    response.end();
  } else if (method === 'DELETE' && pathname.startsWith('/person/delete')) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    const person = await crud.deletePerson(query.name);
    response.write(JSON.stringify(person));
    response.end();
  } else if (method === 'GET' && pathname.startsWith('/person/all')) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    const people = await crud.readAllPeople();
    response.write(JSON.stringify(people));
    response.end();
  } else if (method === 'DELETE' && pathname.startsWith('/person/all-delete')) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    const empty = await crud.deleteAllPeople();
    response.write(JSON.stringify(empty));
    response.end();
  } else {
    // If the pathname does not start with any of these, then we will return a
    // 404.
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Not found');
    response.end();
  }
}

// Start the server on port 3000.
http.createServer(basicServer).listen(3000, () => {
  console.log('Server started on port 3000');
});
