import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';// generates new Id for you 

function TodoForm({addTodo}) {
    //set up state for todoform since this userinput will change
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false,
    });

    //handles input when user types into the input field
    function handleInputChange(e) {//takes in event as parameter
        setTodo({ ...todo, task: e.target.value });//e.target.value contains new input from user
        //passes in a new object with the old todo property spread onto 
        //it and then update task with then new value 
        //from the events target value
    }
    

    
    //handles input submitted
    function addToList(e) {
        e.preventDefault(); // prevents browser from refreshing
        if (todo.task.trim()) {//removes white space on both sides if todo.task is not empty
            addTodo({ ...todo, id: uuidv4() });//calls addTodo, passes in todo prop with updated Id
            //resets task input
            setTodo({ ...todo, task: "" });//calls setTodo, passes todo spread on to it with task with empty string
        }
    }

    return (
        <form className="form-inline justify-content-center"
            onSubmit={addToList}
        >
            <input
                type="text"
                name="task"
                value={todo.task}//this will be updated everytime input change is called
                onChange={handleInputChange}//this will fire everytime input value changes
                className="form-control mb-2 mr-sm-2"
                placeholder="add item"
            >
            </input>
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>

    )

}
    


export default TodoForm;