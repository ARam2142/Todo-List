import React from 'react'

function TodoItem({ todo, toggleComplete, removeTodoItem }) {

    function handleCheckBoxClick() {
        toggleComplete(todo.id);
    }
    function handleRemoveClick() {
        removeTodoItem(todo.id)
    }
    return (
        <div style={{ display: "flex" }}>
            <input type="checkbox" onClick={handleCheckBoxClick} />
            <li style={{
                color: "black",
                textDecoration: todo.completed ? "line-through" : null
            }}
            >{todo.task}
            </li>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}
export default TodoItem;
