import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoForm({addTodo}) {
    //set up state for todoform since this userinput will change
    const [todo, setTodos] = useState({
        id: 0,
        text: "",
        status: false,
    })
    //handles input when user types into the input field
    function handleInputChange(e) {
        setTodos({...todo, text: e.target.value });
    }
    
    //what the component should render on screen
    useEffect(() => {
        console.log(todo.text)
        //addToList();
    });
    
    //handles input submitted
    function addToList(e) {
        e.preventDefault();
        if (todo.text.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            setTodos({ ...todo, text: "" });
        }
    }

    return (
        <form className="form-inline justify-content-center"
            onSubmit={addToList}
        >
            <input
                type="text"
                name="value"
                className="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="add item"
                value={todo.text}
                onChange={handleInputChange}
            >
            </input>
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>

    )

}
    


export default TodoForm;