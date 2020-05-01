import React from "react";

/* <ul className="list-group">
{props.results.map((result, index) => (
<li className="list-group-item" key={result.name.first + index}>
<img alt={result.name.first} className="img-fluid" src={result.picture.thumbnail} />
<p>{result.name.first} {result.name.last} {result.phone} {result.email} </p>
</li>
))}
</ul> */

function EmployeeDetail(props) {
//  const data = props.results;
//  data.sort((a,b)=> a[sortKey].localeCompare(b[sortKey]))
//  this.setState({data})
  return(
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>
            First Name
              </th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {props.results.map((result, index) => (
        <tr key = {result.name.first + index}>
        <td><img alt={result.name.first} className="img-fluid" src={result.picture.thumbnail} /></td>
        <td>{result.name.first}</td>
        <td>{result.name.last}</td>
        <td>{result.phone}</td>
        <td>{result.email}</td>
        </tr>
        ))}
      </tbody>
    </table>
  
  )
}

export default EmployeeDetail;
