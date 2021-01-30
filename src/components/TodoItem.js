import React from 'react';
import Typography from '@material-ui/core/Typography';



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
                    marginTop: '10px'
                }}
            >
                <i className="fas fa-check-square"></i>
            </button>
            <li style={{
                marginLeft: "20px",
                marginRight: '20px',
                marginTop: '10px',
                border: '1px solid grey',
                minWidth: '300px',
                textDecoration: todo.completed ? "line-through" : null,
                display: "flex",
            }}
            >
                <Typography variant="h5">
                    {todo.task}
                </Typography>
            </li>
            <button onClick={handleRemoveClick}
                style={{
                    marginTop: '10px'
                }}
            >
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    );
}
export default TodoItem;

