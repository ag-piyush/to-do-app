import React, {Component} from "react";
import TodoItem from "./TodoItem";
import './TakeData.css';

class TakeData extends Component{
    constructor() {
        super()
        this.state = {
            todos: []
        }
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        this.setState(() => {
            return {
                todos: updatedTodos
            }
        });
    }
    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                id: Date.now(),
                completed: false
            };
    
            this.setState((prevState) => {
                return {
                    todos: prevState.todos.concat(newItem)
                };
            });
    
            this._inputElement.value = "";
        }
    
        console.log(this.state.todos);
    
        e.preventDefault();
    }

    render() {
        const todoItems = this.state.todos.map((item) => <TodoItem
            key={item.id} 
            item={item} 
            handleChange={this.handleChange}/>
        );

        return(
            <div>
                <div className="formDec rounded-input border-bottom-input">
                    <form onSubmit={this.addItem}>
                        <input
                            type="text"
                            ref={(a) => this._inputElement = a}
                            placeholder="Insert your text!">
                        </input>
                        <button type="submit">Add Task!</button>
                    </form>
                </div>
                <div className="todo-list">
                    {todoItems}
                </div>
            </div>
        );
    }
}

export default TakeData;