import { readFile, writeFile, access } from 'fs/promises';
import { constants } from 'fs';

const fileName = 'data.json';
const data = { name: 'John', age: 30 };

// Check if the data file exists.
try {
  await access(fileName, constants.R_OK | constants.W_OK);
  console.log('File exists');
} catch (err) {
  console.log('File does not exist');
}

// Write the data to the data file.
await writeFile(fileName, JSON.stringify(data));

// Read the data from the data file.
const dataFromRead = await readFile(fileName, 'utf8');

// Print the data from the data file.
console.log(JSON.parse(dataFromRead));
