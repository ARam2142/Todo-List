import React, { Component } from "react";
//import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <nav className="navbar fixed-bottom bg-info text-dark justify-content-center">
                <span className="navbar-brand footer-font blue align-middle">
                    Copyright &copy;2021 | Andrés Ramírez
                </span>
            </nav>
        )
    }

}

export default Footer;