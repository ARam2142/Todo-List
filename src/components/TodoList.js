import React from 'react';
//import TodoForm from "./components/TodoForm";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
   const listItems = todos.map((todo) =>
        <TodoItem key={todo.id} todo={todos} />
    );
    return (
        <ul className="list-group">
            {listItems}
        </ul>
    );
}
export default TodoList;
