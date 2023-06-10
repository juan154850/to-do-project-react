import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

const TodoForm = () => {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label> Write a new ToDo</label>
      <textarea
        placeholder="Write your new ToDo here."
        value={newTodoValue}
        onChange={onChange}></textarea>
      <div className="TodoForm-buttonContainer" type="button">
        <button
          className="TodoForm-button TodoForm-cancel"
          onClick={() => {
            setOpenModal(false);
          }}>
          Cancel
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
