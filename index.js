const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/*', (req, res, next) => {
  if (req.path.endsWith('.html')) {
    const redirectPath = req.path.slice(0, -5);
    return res.redirect(301, redirectPath);
  }
  next();
});

app.use(express.static(path.join(__dirname, 'http')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
