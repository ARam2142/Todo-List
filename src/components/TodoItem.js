import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';



function TodoItem({ todo, toggleComplete, removeTodoItem }) {

    //checks that checkbox is clicked and completed
    function handleCheckBoxClick() {
        toggleComplete(todo.id);
    }

    //checks remove is clicked
    function handleRemoveClick() {
        removeTodoItem(todo.id)
    }
    return (
        <div style={{ display: "flex" }}>
            <button onClick={handleCheckBoxClick}
                style={{
                    marginTop: '15px',
                    width: "50px",
                }}
            >
                <i className="fas fa-check-square fa-2x"></i>
            </button>
            <li style={{
                marginLeft: "20px",
                marginRight: '20px',
                marginTop: '15px',
                minWidth: '300px',
                textDecoration: todo.completed ? "line-through" : null,
                //display: "flex",
            }}
            >
            {/* <Grid container justify="space-between"> */}
            <Typography inline variant="h5" color="primary" align="center">
                {todo.task}
            </Typography>

            {/* </Grid> */}
        
            </li>
            <button className="trashbin" onClick={handleRemoveClick}
                style={{
                    marginTop: '15px',
                    width: "50px",
                }}
            >
                <i className="fas fa-trash-alt fa-2x"></i>
            </button>
        </div>
    );
}
export default TodoItem;

