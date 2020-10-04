import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
function App() {
  return (
    <div>
      <Header />
      <div className="todo-list">
        <TodoItem 
          description="Placeholder Data 1"
        />
        <TodoItem 
          description="Placeholder Data 2"
        />
        <TodoItem 
          description="Placeholder Data 3"
        />
        <TodoItem 
          description="Placeholder Data 4"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
