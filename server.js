const express = require('express');
const app = express();

// Design principles data
const designPrinciples = [
  { title: 'Simplicity' },
  { title: 'Consistency' },
  { title: 'Clarity' },
  { title: 'Efficiency' },
  // Add more principles as needed
];

// Route to fetch design principles
app.get('/api/design-principles', (req, res) => {
  res.json(designPrinciples);
});

// Start the server
const port = 3000; // Choose a port number that is not already in use
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
