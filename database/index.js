const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Promise = require('bluebird')

Promise.promisifyAll(mongoose)

let repoSchema = mongoose.Schema({
  username: String,
  repo_name: {type: String, unique: true},
  url: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);
// Saving repos from git to DB
let save = (repos) => {
  for (var i = 0; i < repos.length; i++) {
     let newRepo = new Repo ({
      username: repos[i].owner.login,
      repo_name: repos[i].name,
      url: repos[i].owner.url,
      stars: repos[i].stargazers_count
    })
    newRepo.save(function(err) {
      if (err) {
        console.log("error attempting to save repo to DB")
      }
    })
  }
}
// Building a query to add the repos to
let findRepos = () => {
  let query = Repo.find();
  query.sort({stars: 'desc'});
  //query.limt(25) set a limit
  return query
}

module.exports.findRepos = findRepos;
module.exports.save = save;