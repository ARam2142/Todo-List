import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Hero.css";

function Hero(props) {
  return (
    <Jumbotron>
      <h1>My Todo List</h1>
      <p>add what you need to do for the day</p>
    </Jumbotron>
  )
}
export default Hero;