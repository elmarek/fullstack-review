const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const git = require('../helpers/github.js')
const db = require('../database/index.js')

let app = express();
let port = 1128;

app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

Promise.promisifyAll(require("mongoose"));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  git.getReposByUsername(req.body.term)
  .then(data => {
    db.save(data.data)
  })
  .catch(err => {
    console.log('THere was an error from the post request')
  })
  res.send('Post Successful')

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.findRepos()
  .then(data => {
    console.log(data)
    res.send(data)
  })

});



app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

