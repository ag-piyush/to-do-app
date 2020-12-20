import React from 'react';

class TodoItem extends React.Component {

    completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    render() {
        return(
            <div className="todo-item">
                <input type="checkbox" 
                checked={this.props.item.completed} 
                onChange = {() => this.props.handleChange(this.props.item.id)}/>
                <div>
                    <p className="text" style={this.props.item.completed ? this.completedStyle : null}>{this.props.item.text}</p>
                </div>
                <div className="close">
                    <button className="close-button" onClick = {() => this.props.onDelete(this.props.item.id)}></button>
                </div>
            </div>
        );
    }    
}

export default TodoItem;