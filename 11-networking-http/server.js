const http = require('http');
const url = require('url');

const basicServer = (req, res) => {
  // Receive a request
  // Now, we need to build a response:

  // Indicate that we are sending back HTML
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // This is the content we will be sending (this could come from a file,
  // database, etc.)
  res.write('Hello World!<br>');

  // The request has a `url` property that contains the URL of the request:
  const requestedURL = req.url;

  // We will write that back to the client:
  res.write(`URL is <b>${requestedURL}</b><br>`);

  // The `url` module has a function that can parse the URL:
  const parsedURL = url.parse(requestedURL, true);

  // We can get various parts of the URL from that:
  const query = parsedURL.query;
  const pathname = parsedURL.pathname;

  // We will write that back to the client:
  res.write(`path is <b>${JSON.stringify(pathname)}</b><br>`);
  res.write(`query components are <b>${JSON.stringify(query)}</b><br>`);

  if (Number.parseInt(query.age) >= 16) {
    res.write('You can drive!<br>');
  } else {
    res.write('You cannot drive!<br>');
  }

  res.end(); //end the response
};

// Start the server
// The server object listens on port 3000
http.createServer(basicServer).listen(3000, () => {
  console.log('Server started on port 3000');
});
