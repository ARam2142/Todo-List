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
        <div style={{ 
            display: "flex",
            // overflow: "scroll"
            }}>
            <button
                className="btn btn-outline-success fas fa-check-square fa-2x"
                onClick={handleCheckBoxClick}
                style={{
                    marginTop: '15px',
                    width: "50px",
                }}
            >
            </button>
            <li style={{
                marginTop: '15px',
                backgroundColor: "grey",
                minWidth: '375px',
                textDecoration: todo.completed ? "line-through" : null,
            }}
            >
                <Typography inline variant="h5" align="center">
                    {todo.task}
                </Typography>

            </li>
            <button className="btn btn-outline-danger fas fa-trash-alt fa-2x" 
            onClick={handleRemoveClick}
                style={{
                    marginTop: '15px',
                    width: "50px",
                }}
            >
            </button>
        </div>
    );
}
export default TodoItem;

