import { readFile, writeFile, access } from 'fs/promises';
import { constants } from 'fs';

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

export async function createPerson(name, age) {
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

export async function readPerson(name) {
  try {
    const data = await readFile(fileName, 'utf8');
    const persons = JSON.parse(data);
    return persons[name];
  } catch (err) {
    console.error('Error reading from file: ', err);
    return undefined;
  }
}

export async function updatePerson(name, age) {
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

export async function deletePerson(name) {
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

export async function readAllPeople() {
  try {
    const data = await readFile(fileName, 'utf8');
    const persons = JSON.parse(data);
    return persons;
  } catch (err) {
    console.error('Error reading from file: ', err);
    return undefined;
  }
}

export async function deleteAllPeople() {
  try {
    await writeFile(fileName, JSON.stringify({}));
    return {};
  } catch (err) {
    console.error('Error writing to file: ', err);
    return undefined;
  }
}

init();
