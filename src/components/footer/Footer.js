import React, { Component } from "react";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <nav className="navbar fixed-bottom bg-primary justify-content-center">
                <span className="navbar-brand footer-font blue align-middle">
                    Copyright &copy;2020 | Andrés Ramírez
                </span>
            </nav>
        )
    }

}

export default Footer;