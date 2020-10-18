import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import todosData from "./components/todosData";
//import Conditional from "./components/Conditional";
import LoadingPage from "./components/LoadingPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
      isLoading: true

    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

  handleChange(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })

    // this.setState({ 
    //   todos: this.state.todos.map(todo => {
    //   if (todo.id === id) {
    //     todo.completed = !todo.completed;
    //   }
    //   return todo;
    // } ) } );

    this.setState(() => {
      return {
        todos: updatedTodos
      }
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => <TodoItem
      key={item.id} 
      item={item} 
      handleChange={this.handleChange}/>
    );

    return (
      <div>
        {this.state.isLoading ? 
          <LoadingPage />:
          <div>
            <Header />
            <div className="todo-list">
              {todoItems}
            </div>
            <Footer />
          </div>
        }
      </div>
    );
  }
}

export default App;
