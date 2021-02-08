import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            completed: false
        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    //handles input change in the input tag
    handleInputChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    //handles submit button
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToList(this.state.title, uuidv4());
        this.setState({ title: "" })
    }

    render() {
        return (
            <div>
                <form className="form-inline justify-content-center"
                    onSubmit={this.handleSubmit}//will fire after button click
                >
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}//this will be updated everytime input change is called
                        onChange={this.handleInputChange}//this will fire everytime input value changes
                        className="form-control mb-2 mr-sm-2"
                        placeholder="add item"
                    >
                    </input>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;
