import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Header.css";

function Header(prop) {
    return (
        <Jumbotron style={{backgroundColor: 'rgb(0, 128, 255'}}>
                <h1 className="justify-content-center">Welcome to the Todo List</h1>
                <h5 className="text-center">What are you going to do today?</h5>
        </Jumbotron> 
    )
}

export default Header;