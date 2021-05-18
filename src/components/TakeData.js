import React, {Component} from "react";
import TodoItem from "./TodoItem";
import './TakeData.css';
import axios from 'axios';

axios.defaults.baseURL = "https://aqueous-cliffs-31660.herokuapp.com";

class TakeData extends Component{
    constructor() {
        super()
        this.state = {
            todos: []
        }
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
		axios.get("/todo").then(res => {
			this.setState({ todos: res.data });
            
		});
	}

    handleChange(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id){
                todo.completed = !todo.completed
                axios.post('/todo', {
                    id: todo.id,
                    text: todo.text,
                    completed: todo.completed
                })
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
                completed: false
            };

            axios.post('/todo', {
                text: newItem.text,
                completed: newItem.completed
            })

            this.setState((prevState) => {
                return {
                    todos: prevState.todos.concat(newItem)
                };
            });
    
            this._inputElement.value = "";
        }
    
        e.preventDefault();
    }
    onDelete(id) {
        const newTodos = this.state.todos.filter((item) => item.id !== id);
        
        const URL = `/todo/${id}`;
		axios.delete(URL);
        
        this.setState(() => {
            return {
                todos: newTodos
            }
        });
    }
    render() {
        const todoItems = (this.state.todos.length === 0) ? <div></div> : <div className="todo-list"> { this.state.todos.map((item) => <TodoItem
            key={item.id} 
            item={item} 
            handleChange={this.handleChange}
            onDelete={this.onDelete}/> 
        )
    } </div>

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
                {todoItems}
            </div>
        );
    }
}

export default TakeData;