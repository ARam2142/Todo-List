import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import TodoForm from "./components/TodoForm"
import Footer from "./components/footer/Footer";
import TodoList from "./components/TodoList";
import "./App.css";

const LOCAL_STORAGE_KEY = "todo-list-todos";

//Handles new todos 
function App() {

  //state will take in array of todos
  const [todos, setTodos] = useState([]);

  //will add todo to array
  function addTodo(todo) {
    setTodos([todo, ...todos])
    //call setTodos function, passes a new todo 
    //array and the old todos spread over it
  }
  
  //reading data from local storage
  useEffect(() => {
    //convert Localstoragekey to string by using json.parse
    var todoStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (todoStorage) { //if there is todostorage
      setTodos(todoStorage);//update setTodos
    }
  }, [])

  //saving data to local storage
  useEffect(() => {
    //converts localstoragekey to json object
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  function toggleComplete(id) {
    setTodos(//call settodos which will update completed
      todos.map(todo => {//map over todos
        if (todo.id === id) {//check if the todo id matches the one passed in
          return {//if it does return new object 
            ...todo,
            completed: !todo.completed//false will become true and true to be false
          };

        }
        return todo
      })
    )
  }

  //removes li from the list by id
  function removeTodoItem(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }


  return (
    <div>
      <Header />
      <TodoForm addTodo={addTodo} /> { /*addTodo function passed into TodoFrom component as a prop */}
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete} 
        removeTodoItem={removeTodoItem}
        />{ /*toggleComplete function passed into TodoList and TodoItem as props */}
      <Footer />
    </div>
  )
}

export default App;
