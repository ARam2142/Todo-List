import React, { Component } from "react";
import { Typography } from '@material-ui/core';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        let {item} = this.props;
        return (
            <div style={{
                display: "flex",
                overflow: "scroll"
            }}>
                <button
                    className="btn btn-outline-success fas fa-check-square fa-2x"
                    onClick={()=>this.props.toggleComplete(item.id)}
                    style={{
                        marginTop: '15px',
                        width: "50px",
                    }}
                >
                </button>
                <li style={{
                    marginTop: '15px',
                    backgroundColor: "grey",
                    minWidth: '375px',
                    textDecoration: item.completed ? "line-through" : null,
                }}
                >
                    <Typography inline variant="h5" align="center">
                        {item.title}
                    </Typography>

                </li>
                <button className="btn btn-outline-danger fas fa-trash-alt fa-2x"
                    onClick={() => this.props.deleteTodo(item.id)}
                    style={{
                        marginTop: '15px',
                        width: "50px",
                    }}
                >
                </button>
            </div>
        );
    }
}

export default TodoItem;