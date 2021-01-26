import React from 'react';
import TodoItem from "./TodoItem";

//props todos toggleComplete and removeTodoItem passed from App component
function TodoList({ todos, toggleComplete, removeTodoItem }) {
    const listItems = todos.map((todo) =>
        <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodoItem={removeTodoItem}
        />
    );
    return (
        <div className="form-inline justify-content-center">
            <ul className="list-group" style={{ display: "flex" }}>
                {listItems}
            </ul>
        </div>
    );
}
export default TodoList;
