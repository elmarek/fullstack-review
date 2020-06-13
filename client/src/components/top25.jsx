import React from 'react';

let TopRepos = (array) => (
  array.forEach(element => {
    return
      <table>
        <tr>
          <td href={element.url}>{element.username}</td>
          <td>{element.repo_name}</td>
          <td>{element.stars}</td>
        </tr>
      </table>
  })
)

export default TopRepos;
