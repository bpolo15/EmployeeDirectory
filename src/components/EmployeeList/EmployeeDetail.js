import React from "react";




function EmployeeDetail(props) {
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
