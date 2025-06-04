import React from "react";

import Header from './components/Header';
import TodoItems from './components/todo-items';
import Button from './components/button';

import './style.css';

const App = () => {
  return (
    <div className="Todo-container">
      <Header/>
      <TodoItems/>
      <TodoItems/>
      <TodoItems/>
      <TodoItems/>
      <TodoItems/>
      <Button/>
    </div>
  )
}

export default App;