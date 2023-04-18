import 'dotenv/config';
import pg from 'pg';

// Get the Pool class from the pg module.
const { Pool } = pg;

export const PeopleDatabase = (dburl) => {
  return {
    connect: async () => {
      const p = new Pool({
        connectionString: dburl,
        ssl: { rejectUnauthorized: false },
      });
      return PeopleQuery(p, await p.connect());
    },
  };
};

const PeopleQuery = (pool, client) => {
  return {
    init: async () => {
      const queryText = `
        CREATE TABLE IF NOT EXISTS people (
          id VARCHAR(30) PRIMARY KEY,
          name VARCHAR(30),
          age INTEGER
        );
        
        INSERT INTO 
          people(id, name, age) 
        VALUES 
          ('1', 'Artemis', 19),
          ('2', 'Parzival', 17),
          ('3', 'John', 30),
          ('4', 'Mia', 22);
      `;
      const res = await client.query(queryText);
    },

    close: async () => {
      client.release();
      await pool.end();
    },

    createPerson: async (id, name, age) => {
      const queryText = `
        INSERT INTO people(id, name, age) VALUES($1, $2, $3) RETURNING *;
      `;
      const res = await client.query(queryText, [id, name, age]);
      return res.rows;
    },

    readPerson: async (id) => {
      const queryText = `
        SELECT * FROM people WHERE id = $1;
      `;
      const res = await client.query(queryText, [id]);
      return res.rows;
    },

    readAllPeople: async () => {
      const queryText = `
        SELECT * FROM people;
      `;
      const res = await client.query(queryText);
      return res.rows;
    },

    updatePerson: async (id, name, age) => {
      const queryText = `
        UPDATE people SET name = $2, age = $3 where id = $1 RETURNING *;
      `;
      const res = await client.query(queryText, [id, name, age]);
      return res.rows;
    },

    deletePerson: async (id) => {
      const queryText = `
        DELETE FROM people WHERE id = $1 RETURNING *;
      `;
      const res = await client.query(queryText, [id]);
      return res.rows;
    },
  };
};
