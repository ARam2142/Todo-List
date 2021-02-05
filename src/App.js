import React, { Component } from "react";
import Header from "./components/header/Header";
import TodoForm from "./components/TodoForm"
import Footer from "./components/footer/Footer";
import TodoList from "./components/TodoList";
import "./App.css";

//Handles new todos 
const todoArray = []
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      completed: false,
    };

  }

  addToList = (title, id) => {
    this.setState({
      title: title,
      id: id
    }
      , () => {//pass in call back as a function
        console.log(this.state)
      });
  }


  //use todoArray.push this.state
  render() {
    return (
      <div>
        <Header />
        <TodoForm addToList={this.addToList} />
        {/*map over the todo array which will create a new todo item in array*/}
        <div>
          {todoArray.map((todo, index) => {
            //return <TodoItem />
          })}

        </div>
        <Footer />
      </div>
    )
  }


}

export default App;


//the code is one step behind. get submit to consolelog current 'submit'
//research api component