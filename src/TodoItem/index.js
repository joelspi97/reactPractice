import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span 
          className={`Icon Icon__check ${props.completed && 'Icon__check--active'}`}
          onClick={props.onComplete}      
      >
        √
      </span>
      <p className={`TodoItem__p ${props.completed && 'TodoItem__p--complete'}`}>
        {props.text}
      </p>
      <span 
          className="Icon Icon__delete"
          onClick={props.onDelete}
      >
            
              X
      </span>
    </li>
  );
}

export { TodoItem };
