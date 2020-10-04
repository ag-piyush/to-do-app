import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import todosData from "./components/todosData";

function App() {
  const todoItems = todosData.map(function(item){
    return (
      <TodoItem key={item.id} item={item}/>
    )
  })
  return (
    <div>
      <Header />
      <div className="todo-list">
        {todoItems}
      </div>
      <Footer />
    </div>
  );
}

export default App;
