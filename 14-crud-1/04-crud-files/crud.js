import { readFile, writeFile, access } from 'fs/promises';
import { constants } from 'fs';
import readline from 'readline';

// The file we want to store data in.
const fileName = 'data.json';

async function init() {
  try {
    // Check if the file exists.
    await access(fileName, constants.R_OK | constants.W_OK);
  } catch (err) {
    // File does not exist. Create it.
    await writeFile(fileName, '{}');
  }
}

// CRUD Operations
//
//   The following are basic CRUD operations:
//
//   - Create      => createPerson()
//   - Read        => readPerson()
//   - Update      => updatePerson()
//   - Delete      => deletePerson()

async function createPerson(name, age) {
  const person = { name: name, age: age };
  try {
    const data = await readFile(fileName, 'utf8');
    const persons = JSON.parse(data);
    persons[name] = person;
    await writeFile(fileName, JSON.stringify(persons));
    return person;
  } catch (err) {
    console.error('Error writing to file: ', err);
    return undefined;
  }
}

async function readPerson(name) {
  try {
    const data = await readFile(fileName, 'utf8');
    const persons = JSON.parse(data);
    return persons[name];
  } catch (err) {
    console.error('Error reading from file: ', err);
    return undefined;
  }
}

async function updatePerson(name, age) {
  const person = { name: name, age: age };
  try {
    const data = await readFile(fileName, 'utf8');
    const persons = JSON.parse(data);
    const person = persons[name];
    person.age = age;
    await writeFile(fileName, JSON.stringify(persons));
    return person;
  } catch (err) {
    console.error('Error updating file: ', err);
    return undefined;
  }
}

async function deletePerson(name) {
  try {
    const data = await readFile(fileName, 'utf8');
    const persons = JSON.parse(data);
    const person = persons[name];
    delete persons[name];
    await writeFile(fileName, JSON.stringify(persons));
    return person;
  } catch (err) {
    console.error('Error deleting from file: ', err);
    return undefined;
  }
}

init();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

let person = undefined;

process.stdout.write('> ');
for await (const command of rl) {
  const args = command.split(' ');
  switch (args[0]) {
    case 'create':
      person = await createPerson(args[1], args[2]);
      break;
    case 'read':
      person = await readPerson(args[1]);
      break;
    case 'update':
      person = await updatePerson(args[1], args[2]);
      break;
    case 'delete':
      person = await deletePerson(args[1]);
      break;
    case 'exit':
      rl.close();
      break;
    default:
      console.log('Invalid command');
  }

  if (args[0] === 'exit') {
    break;
  }

  console.log(person);
  process.stdout.write('> ');
}
