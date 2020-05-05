import React, { Component } from "react";
import Container from "../Container"
import Row from "../Row"
import Col from "../Col"
import Search from "../Form/Search"
import EmployeeDetail from "./EmployeeDetail";
import API from "../API";
import Button from "../Form/Button"


class Employees extends Component {
    constructor (props){
        super(props)
        this.state = {
            employee: [],
            query: "",
            sort: false
        }
    }

    componentDidMount(){
    API.Generate()
        .then(results => this.setState({employee: results.data.results}))
        .catch(err => console.log(err))
    }
    handleInputChange = event => {
        
        event.preventDefault();
         this.setState({
           query: event.target.value
         })
       }

    setSortNames = event => {
        event.preventDefault();
        this.setState({
            sort: true
        })
    }
 
    render() {
        var matchedEmployees = this.state.employee;
        if(this.state.query !== '')
        {
           
            matchedEmployees = matchedEmployees
            .filter(e => 
                    e.name.first.includes(this.state.query)
                ||  e.name.last.includes(this.state.query)
                ||  e.phone.includes(this.state.query)
                ||  e.email.includes(this.state.query)
                
                );
        }
        if(this.state.sort === true){
            
            matchedEmployees.sort((a, b) => {
                if(a.name.first < b.name.first){
                    return -1;
                }
                if(a.name.first > b.name.first){
                    return 1;
                }
                return 0;
            })
        }

        return(
            <Container >
                <Row>
                    <Col size = "md-6">
                    <Search handleInputChange={this.handleInputChange.bind(this)}/>
                    <Button setSortNames={this.setSortNames.bind(this)} />
                    </Col>
                </Row>
                <Row>
                    <Col size = 'md-12'>
                      
                            <EmployeeDetail results={matchedEmployees}/>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Employees;