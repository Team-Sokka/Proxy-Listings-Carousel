const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 8000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'../public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port, () => {
  console.log(`Proxy is listening on port ${port}`)
});