// Create web server
const express = require('express');
const app = express();

// Add the path module
const path = require('path');

// Add the comments module
const comments = require('./comments');

// Add the body-parser module
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Add the static middleware
app.use(express.static(path.join(__dirname, 'public')));

// Add the comments route
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add the comments route
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// Start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Path: comments.js
// Create comments
const comments = [
  {
    id: 1,
