import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

const TodoCounter = () => {

  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      <span>{completedTodos}</span> of <span>{totalTodos}</span> Task complete.
    </h1>
  );
}

export { TodoCounter};