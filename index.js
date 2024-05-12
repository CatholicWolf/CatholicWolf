const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const verificationFile = 'google-site-verification.txt';
const verificationContent = 'google-site-verification=T4_xlV-F9irGNAaIXzrsoIzwGH2N33AgYKy_bTnA6aY';

fs.writeFileSync(path.join(__dirname, verificationFile), verificationContent);

app.use(express.static(path.join(__dirname, 'http')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
