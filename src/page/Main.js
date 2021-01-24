import React, {useState} from "react";
import Header from "../components/header/Header";
import TodoForm from "../components/TodoForm"
import Footer from "../components/footer/Footer";
import TodoList from "../components/TodoList"

function Main() {

    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos([todo, ...todos])
    }

    return (
        <div>
            <Header />
            <TodoForm addTodo={addTodo} />
            <TodoList todos ={todos} />
            <Footer />
        </div>
    )
}
export default Main;