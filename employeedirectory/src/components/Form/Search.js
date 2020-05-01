import React, { Component } from 'react'

class Search extends Component {



 render() {
   return (
       <input
         placeholder="Search for Employee"
         ref={input => this.search = input}
         onChange={this.props.handleInputChange}
       />
  
   )
 }
}

export default Search