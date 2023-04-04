// Look! You can use PouchDB in Node.js!
import PouchDB from 'pouchdb';

try {
  const db = new PouchDB('mydb');

  let res = await db.post({
    value: 'Hello World!',
  });

  console.log(res);

  res = await db.get(res.id);
  console.log(res);

  res = await db.allDocs({
    include_docs: true,
    attachments: true,
  });

  res.rows.forEach((row) => {
    const id = row.doc._id;
    const value = row.doc.value;
    console.log(id, value);
  });
} catch (err) {
  console.log('Yikes! Error!');
  console.log(err);
}
