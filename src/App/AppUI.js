import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

const AppUI = () => {
  const {
    filteredTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    // setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {filteredTodos.map((task) => (
          <TodoItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTodo(task.text)}
            onDelete={() => deleteTodo(task.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
};

export { AppUI }