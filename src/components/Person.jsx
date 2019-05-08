import React, { Component } from 'react';
// using an ES6 transpiler, like babel
import Img from 'react-image'
class Person extends Component {
    constructor(props) {
        super(props)
    }
    getImagePath(path){
        return path;
    }
    render() {
        let allPeople = this.props.allPeople;
        let allPerson = [];
        // otherwise
// let Img = require('react-image')
        if (allPeople.length > 0) {
            allPerson = allPeople.map((element, index) => (
                <div className="person-panel" key={index}>
                    <div className="row">
                        <div className="col-md-12">
                            <h3>{element.name},{element.title}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9 col-md9">
                            <p>
                                {element.bio}
                            </p>
                        </div>
                        <div className="col-md-3 col-md3">
                            <img className="person-image" src={require(`../assets/${element.img}`)} alt="test" />
                        </div>
                    </div>
                </div>
            ))
            return (
                allPerson

            )
        }
        // else{
        //     allPerson = <h1>Loading.......</h1>
        // }
        else {
            return (
                <div>
                    <h3>Loading...</h3>
                    <div className="loader"></div>
                </div>
            )
        }


    }
}
export default Person;