import React from "react";

const TodoItems = (props) => {
    return (
        <li className="Todo-items">
          <span>  
            {props.completed ? <></> : <input type="checkbox" /> }
            <span className="todo-item-text">{props.items}</span>
          </span>
          <p>...</p>
        </li>
    )
}

export default TodoItems;