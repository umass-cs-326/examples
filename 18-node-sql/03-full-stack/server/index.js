import express from 'express';
import { PeopleDatabase } from './peopledb.js';

const PeopleRoutes = (app, db) => {
  app.use(express.static('client'));

  app.post('/person/create', async (req, res) => {
    try {
      const { id, name, age } = req.query;
      const person = await db.createPerson(id, name, age);
      res.send(JSON.stringify(person));
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/person/read', async (req, res) => {
    try {
      const { id } = req.query;
      const person = await db.readPerson(id);
      res.send(JSON.stringify(person));
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.put('/person/update', async (req, res) => {
    try {
      const { id, name, age } = req.query;
      const person = await db.updatePerson(id, name, age);
      res.send(JSON.stringify(person));
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.delete('/person/delete', async (req, res) => {
    try {
      const { id } = req.query;
      const person = await db.deletePerson(id);
      res.send(JSON.stringify(person));
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/person/all', async (req, res) => {
    try {
      const people = await db.readAllPeople();
      res.send(JSON.stringify(people));
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/', (req, res) => {
    res.redirect('/person/all');
  });

  return app;
};

const start = async () => {
  const db = await PeopleDatabase(process.env.DATABASE_URL).connect();
  const app = PeopleRoutes(express(), db);
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};

start();
