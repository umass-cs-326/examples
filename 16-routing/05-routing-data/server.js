// https://expressjs.com
// https://expressjs.com/en/resources/middleware/morgan.html
import express from 'express';
import logger from 'morgan';

const app = express();
const port = 3000;

app.use(logger('dev'));

// NEW: Add json and urlencoded middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static('static'));

// NEW: Add an object to store "people" data.
const people = {};

app.get('/hello/text', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello World!');
});

app.get('/hello/html', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/hello/json', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// NEW: Add a route to create a new person.
//   This route will accept a POST request with the following URL parameters:
//     - name: The name of the person
//     - age: The age of the person
//
//   The response will be a JSON object representing the person.
app.post('/create/person/:name/:age', (req, res) => {
  // Create a new person
  const person = req.params;
  people[person.name] = person;
  // Status code 201: Created
  res.status(201).json(person);
});

// NEW: Add a route to get a person.
//   This route will accept a GET request with the following URL parameters:
//     - name: The name of the person
//
//   The response will be a JSON object representing the person.
//   If the person is not found, the response will be a 404 error.
app.get('/person/:name', (req, res) => {
  const { name } = req.params;
  const person = people[name];
  if (person) {
    res.json(person);
  } else {
    res.status(404).json({ message: `Person ${name} not found` });
  }
});

// NEW: Add a route to create a new person.
//   This route will accept a POST request with the following body properties:
//     - name: The name of the person
//     - age: The age of the person
//
//   The response will be a JSON object representing the person.
//   If the person is not found, the response will be a 404 error.
app.post('/create/person', (req, res) => {
  // Create a new person
  const person = req.body;
  people[person.name] = person;
  // Status code 201: Created
  res.status(201).json(person);
});

// NEW: Add a route to get all people.
//   The response will be a JSON object representing all people.
app.get('/people', (req, res) => {
  res.json(people);
});

app.get('*', (req, res) => {
  console.log(req.path);
  res.status(404).json({ message: 'Unknown Request' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
