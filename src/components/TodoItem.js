import React from 'react';

class TodoItem extends React.Component {
    render() {
        console.log(this.props);
        return(
            <div className="todo-item">
                <input type="checkbox" checked={this.props.item.completed} onChange = {() => {console.log("Changed!")}}/>
                <p>{this.props.item.text}</p>
            </div>
        );
    }    
}

export default TodoItem;