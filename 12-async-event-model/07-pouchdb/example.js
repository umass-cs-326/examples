// Retrieve the UI elements.
const button = document.getElementById('button');
const destroy = document.getElementById('destroy');
const output = document.getElementById('output');
const input = document.getElementById('input');

// Initialize a reference to the database to null (to be initialized later)
let db = null;

// Initialize the database when the page loads
//   and populate the output element with the database contents.
window.addEventListener('load', async (event) => {
  // Create a new PouchDB instance
  db = new PouchDB('mydb');
  output.innerHTML = 'Database Initialized';

  try {
    // Get all documents in the database
    const result = await db.allDocs({
      include_docs: true,
      attachments: true,
    });

    // Display the documents in the output element
    result.rows.forEach((row) => {
      const id = row.doc._id;
      const value = row.doc.value;
      output.innerHTML = output.innerHTML + '<br>' + id + ' : ' + value;
    });
  } catch (err) {
    console.log(err);
  }
});

button.addEventListener('click', async (event) => {
  const value = input.value;

  // Create a new document
  let res = await db.post({
    value: value,
  });

  console.log(res);

  // Display the document in the output element
  output.innerHTML = output.innerHTML + '<br>' + res.id + ' : ' + value;
});

destroy.addEventListener('click', async (event) => {
  // Destroy the database
  const res = await db.destroy();

  // Disable all UI elements.
  button.disabled = true;
  destroy.disabled = true;
  input.disabled = true;

  console.log(res);

  output.innerHTML = 'Database Destroyed';
});
