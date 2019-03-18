const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3030;

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});


app.listen(port, () => console.log(`App is up and listening on port ${port}!`));