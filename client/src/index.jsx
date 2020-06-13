import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import TopRepos from './components/top25.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this)
  }

  componentDidMount() {
    this.updateRepos()
  }

  updateRepos() {
    fetch("http://localhost:1128/repos")
    .then(res => res.json())
    .then(result => {
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
    let termString = JSON.stringify({
      term: term
    })
    fetch("http://localhost:1128/repos", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: termString
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
      <Search onSearch={this.search}/>
      <TopRepos />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));