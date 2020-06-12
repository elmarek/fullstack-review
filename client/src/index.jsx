import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    this.updateRepos()
  }

  updateRepos() {
    fetch("http://localhost:1128/repos")
    .then(res => res.json())
    .then(result => {
      console.log("fetched!!")
          this.setState({
          repos: result
        });
      },
      (error) => {
       console.log('error from fetch')
      }
    )
  }

  search (term) {
    console.log(`${term} was searched`);
    // post request with searched term search
    fetch("http://localhost:1128/repos", {
      method: "POST",
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "term": term
      })
    })
    //.then update the repo array
    .then((res) => {
      this.updateRepos()
    })
    .catch(err => {
      console.log('error')
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));