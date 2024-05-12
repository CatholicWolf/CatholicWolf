const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/*', (req, res, next) => {
  const filePath = path.join(__dirname, 'http', `${req.path}.html`);

  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      // File doesn't exist or cannot be read
      return next();
    }

    // Remove the .html extension from the URL
    const cleanedPath = req.path.endsWith('.html') ? req.path.slice(0, -5) : req.path;

    // Serve the file
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error(`Error serving file: ${filePath}`, err);
        res.status(500).send('Internal Server Error');
      } else {
      }
    });
  });
});

app.use(express.static(path.join(__dirname, 'http')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
