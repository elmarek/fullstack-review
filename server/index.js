const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Promise = require('bluebird');

let app = express();
let port = 1128;

app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

Promise.promisifyAll(require("mongoose"));

let sampleArray = ['Well', 'hello', 'there']

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log("POST REQUEST BODY :", req)
  res.send(sampleArray)

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log("request body :", req.body)
  res.send(sampleArray)
});



app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

