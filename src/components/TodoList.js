import React from 'react';
import TodoItem from "./TodoItem";
import List from '@material-ui/core/List';

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
            <List>
                <ul className="list-group" 
                style={{ display: "flex", 
                //lineHeight: '30px'
                }}>
                    {listItems}
                </ul>

            </List>
        </div>
    );
}
export default TodoList;
