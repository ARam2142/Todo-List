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
    //this.toggleComplete = this.toggleComplete.bind(this)
  }

  addToList = (title, id) => {
    this.setState({
      title: title,
      id: id
    }
      , () => {//pass in call back as a function
        console.log(this.state)
        let todos = this.state.todoArray;
        todos.push({
          id: id,
          title: title,
        });
        this.setState({ todoArray: todos });
        const todo = this.state.todoArray;
        localStorage.setItem("todo-list", JSON.stringify(todo));
      });
  }

  componentDidMount() {
    const data = localStorage.getItem('todo-list');//gets the item
    const dataToObj = JSON.parse(data);//converts back to js object
    this.setState({
      todoArray: data ? dataToObj : [] 
    })
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


  // toggleComplete = (id) => {
  //   //source from stackoverflox over: how to make line through todo
  //   this.setState(
  //     this.todoArray.map(todo => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           todoArray: !todo.completed
  //         };
  //       }
  //       return todo
  //     })
  //   )
  // }


  //use todoArray.push this.state
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
                toggleClick={this.toggleComplete}
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