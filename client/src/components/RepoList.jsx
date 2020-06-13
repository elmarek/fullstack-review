import React from 'react';
import TopRepos from './top25.jsx'

const RepoList = (props) => {
  console.log("PROPS.REPOS :", props.repos)
  return <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {TopRepos(props.repos)}

   </div>
}

export default RepoList;