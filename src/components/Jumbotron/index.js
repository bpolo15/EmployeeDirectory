import React from "react";
import "./style.css"

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid" >
      <div className="container">
        <h1 className="display-4" >Employee Directory</h1>
        <p className="lead">
          Click to filter by name or use the search box to narrow
          your results.
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
