import express from 'express';

const app = express();

app.get('/', (req, res) => {
  let count = 0;
  for (let i = 0; i < 10; i++) {
    count += i;
  }
  res.send(`Hello World! ${count}`);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
