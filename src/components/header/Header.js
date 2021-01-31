import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Header.css";

function Header() {
    return (
        <Jumbotron className="bg-info text-dark"style={{
            borderRadius: "0%"
            }}>
                <h1 className="justify-content-center">Welcome to the Todo List</h1>
                <h5 className="text-center">What are you going to do today?</h5>
        </Jumbotron> 
    )
}

export default Header;