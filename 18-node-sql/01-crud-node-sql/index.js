import { PeopleDatabase } from './peopledb.js';

// Main entry point for the application.
async function main() {
  try {
    console.log(process.env.DATABASE_URL);
    const peopleDb = PeopleDatabase(process.env.DATABASE_URL);
    const query = await peopleDb.connect();

    let rows = null;

    rows = await query.readAllPeople();
    console.log('READ ALL: ', rows);

    rows = await query.createPerson(99, 'John', 20);
    console.log('CREATED: ', rows);

    rows = await query.readAllPeople();
    console.log('READ ALL: ', rows);

    rows = await query.readPerson(99);
    console.log('READ: ', rows);

    rows = await query.updatePerson(99, 'John', 21);
    console.log('UPDATED: ', rows);

    rows = await query.deletePerson(99);
    console.log('DELETED: ', rows);

    rows = await query.readAllPeople();
    console.log('READ ALL: ', rows);

    // Closes the pool and ends all client connections.
    await query.close();
  } catch (err) {
    console.error(err);
  }
}

// Run main.
await main();
