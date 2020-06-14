import React from 'react';
// Creates a table row for each repo
let Repo = (props) => {
  return(
     <tr>
      <td> <a href={props.repo.url}>{props.repo.repo_name}</a></td>
      <td>{props.repo.username}</td>
      <td>{props.repo.stars}</td>
    </tr>)
}

export default Repo;
