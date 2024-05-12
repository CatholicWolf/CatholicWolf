const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// CNAME record details
const cnameLabel = 'qrmnxtg5fgi2';
const cnameDestination = 'gv-ddit654ebh7jyl.dv.googlehosted.com';

// Create the CNAME record file
const cnameFile = 'CNAME';
const cnameContent = `${cnameLabel} ${cnameDestination}`;

// Write the CNAME record to the file
fs.writeFileSync(path.join(__dirname, cnameFile), cnameContent);

app.use(express.static(path.join(__dirname, 'http')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
