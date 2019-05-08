import React, { Component } from 'react';
import Filter from './Filter';
import Person from './Person';
import axios from 'axios';
class People extends Component {
    constructor() {
        super();
        this.state = {
            people:{},
            titles:{}
        }
    }
    componentDidMount() {
        this.getAllPeople()
    }
    getAllPeople() {
        axios.get('http://localhost:9090/peoplelist')
            .then(res => {
                console.log(res)
                this.state.people = res.data.people;
                this.state.titles = res.data.titles;
                let allPeople =   this.state
                this.setState({
                    allPeople
                })
            },
                err => {
                    console.log(err)
                })
    }
    render() {


        return (
            <React.Fragment>
                <div className="container">
                    <Filter allTitles={this.state.titles}/>
                    <Person allPeople={this.state.people }/>
                </div>

            </React.Fragment>
        )
    }
}
export default People;