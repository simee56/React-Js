import React from "react";

import Header from './components/Header';
import TodoItems from './components/todo-items';
import Button from './components/button';

import './style.css';

const App = () => {
  return (
    <div className="Todo-container">
      <Header title="Todo-App"/>
      <TodoItems items = "Eat"/>
      <TodoItems completed = {true} items = "Code"/>
      <TodoItems items = "Excericise"/>
      <TodoItems items = "Dusting"/>
      <TodoItems items = "Planting"/>
      <Button/>
    </div>
  )
}

export default App;