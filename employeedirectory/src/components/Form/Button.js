import React, { Component } from 'react'
import "./style.css"

class Button extends Component {



 render() {
   return (
     <button type="button" className = "btn-black" onClick={this.props.setSortNames}>Sort By Name</button>
  
   )
 }
}

export default Button;