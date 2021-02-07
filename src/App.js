import React, { Component } from "react";
import Header from "./components/header/Header";
import TodoForm from "./components/TodoForm"
import Footer from "./components/footer/Footer";
import TodoItem from "./components/TodoItem";
import "./App.css";

//const todoArray = [];
//Handles new todos 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      completed: false,
      todoArray: [],
    };

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
      });
  }

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
                toggleClick={this.toggleClick}
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


//the code is one step behind. get submit to consolelog current 'submit'
//research api component