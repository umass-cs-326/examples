// https://expressjs.com
// https://expressjs.com/en/resources/middleware/morgan.html
import express from 'express';
import logger from 'morgan';

const app = express();
const port = 3000;

// NEW: Add logger middleware
//   This will log all requests to the console. Super userful!
//
// To Install:
//  npm install --save morgan
//
// Question:
//   1. What is "middleware"?
app.use(logger('dev'));

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
