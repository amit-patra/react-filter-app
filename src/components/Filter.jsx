import React, { Component } from 'react';

class Filter extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let listTitles = [];
        if(this.props.allTitles.length>0){
             listTitles = this.props.allTitles.map((element,index)=>(
                <option key={element.key}>{element.display}</option>
            ))
        }
        return (
            <div className="row filter-panel">
                <form className="form-inline" >
                    <div className="form-group form-space">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" placeholder="Enter employee name" id="name" />
                    </div>
                    <div className="form-group form-space">
                        <label htmlFor="pwd">Title:</label>
                        <select className="form-control" name="type" >
                                <option >Please Select</option>
                                {listTitles}
                        </select>
                    </div>
                    <div className="checkbox form-space">
                        <label><input type="checkbox" /> Intern</label>
                    </div>
                    <div className=" form-group form-space">
                    <button  className="btn btn-default">Reset</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}
export default Filter;