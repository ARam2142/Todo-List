import React from 'react';
//import TodoForm from "./components/TodoForm";
import TodoItem from "../components/TodoItem";

function TodoList({ todos }) {
    return (
        <div>
            <ul className="list-group">
                {todos.map((todo) => (
                    <TodoItem key={todo.id}
                        value={todo}
                        todo={todos} />
                ))}
            </ul>
        </div>
    );
}
export default TodoList;
