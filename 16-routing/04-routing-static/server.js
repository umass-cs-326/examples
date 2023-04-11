// https://expressjs.com
// https://expressjs.com/en/resources/middleware/morgan.html
import express from 'express';
import logger from 'morgan';

const app = express();
const port = 3000;

app.use(logger('dev'));

// NEW: Add static middleware
//   This will serve up the static files in the 'static' directory.
//
//   https://expressjs.com/en/starter/static-files.html
//
//   NOTE: The code below is all we need to add to serve up the static files.
app.use('/static', express.static('static'));

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
