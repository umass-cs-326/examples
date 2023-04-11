// https://expressjs.com
import express from 'express';

// Create an Express application.
//
// First, we need to install the Express module.
//
// To Install: npm install --save express
//
//    The '--save' flag instructs npm to install the package in the package.json
//    file. Next time you can run 'npm install' and it will install any package
//    listed in the package.json file.
//
//    This command will also create the node_modules folder and install the
//    express module into it. It will also create the package-lock.json file.
//    This file is used by npm to keep track of the versions of packages that
//    have been installed.
const app = express();
const port = 3000;

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
