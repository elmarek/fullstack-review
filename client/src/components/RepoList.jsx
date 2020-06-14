import React from 'react';
import Repo from './repoEntry.jsx'

const RepoList = (props) => {
  return (<div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <table>
      <thead>
        <tr>
          <td>Repo</td>
          <td>Name</td>
          <td>Stars</td>
        </tr>
      </thead>
      <tbody>
        {props.repos.map(repo => (
          <Repo repo={repo} />
        ))}
      </tbody>
    </table>
  </div>)
}
{/* <RepoList repos={this.state.repos}/> */ }
export default RepoList;


