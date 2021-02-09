import React, { Component } from "react";
import Header from "./components/header/Header";
import TodoForm from "./components/TodoForm"
import Footer from "./components/footer/Footer";
import TodoItem from "./components/TodoItem";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      completed: false,
      todoArray: []
    };
  }

  componentWillMount() {//will happen first
    const data = localStorage.getItem('todo-list');//gets the item
    const dataToObj = JSON.parse(data);//converts back to js object
    this.setState({
      todoArray: data ? dataToObj : [] 
    })
  }

  componentDidUpdate() {//will happen second
    const todo = this.state.todoArray;
    localStorage.setItem("todo-list", JSON.stringify(todo));//converts state object into string
  }

  addToList = (title, id) => {
    this.setState({
      title: title,
      id: id,
      completed: false
    }
      , () => {//pass in call back as a function
        console.log(this.state)
        let todos = this.state.todoArray;
        todos.push({
          id: id,
          title: title,
          completed: false
        });
        this.setState({ todoArray: todos });
      });
  }

  //delete todo items
  deleteTodo = (id) => {
    //spread operator copies the list
    const todoArray = [...this.state.todoArray];

    //filters out deleted item 
    const updatedList = todoArray.filter(todo => todo.id !== id);

    //updated state
    this.setState({
      todoArray: updatedList
    });
  };


  toggleComplete = (id) => {

    //spread operator copies list
    const todoArray = [...this.state.todoArray];

    //map method maps over element in each object
    const mapArray = todoArray.map(todo => {
      if (todo.id === id) {//checks if todo is === to id 
        return {
          ...todo, completed: !todo.completed
        }
      }
      return todo
    })//source cited: todolist react for beginners youtube

    this.setState({
      todoArray: mapArray,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <TodoForm addToList={this.addToList} />
        {/*map over the todo array which will create a new todo item in array*/}
        <div className="form-inline justify-content-center" >
          <ul className="list-group"
            style={{
              display: "flex",
              listStyle: "none"
            }}>
            {this.state.todoArray.map((item, index) => {
              return <TodoItem
                key={index}
                item={item}
                deleteTodo={this.deleteTodo}
                toggleComplete={this.toggleComplete}
              />
            })}
          </ul>
        </div>
        <Footer />
      </div>
    )
  }
}
export default App;