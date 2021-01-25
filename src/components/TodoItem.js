import React from 'react'
//import TodoForm from "./components/TodoForm";

function TodoItem({ todo }) {
    return (
        <div>
            <li className="list-group-item">{todo.text}</li>
            <button>X</button>
        </div>
    );
}
export default TodoItem;
