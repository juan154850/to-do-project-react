import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  //   const [todos, saveTodos] = useLocalStorage(`TODOS_V1`, []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = todos.filter((todo) => {
    const lowerTodoText = todo.text.toLowerCase();
    let lowerSearchedTodoText = "";
    if (searchValue?.length > 0) {
      lowerSearchedTodoText = searchValue.toLowerCase();
    }
    return lowerTodoText.includes(lowerSearchedTodoText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => {
      return todo.text === text;
    });
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({text, completed:false})
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        setSearchValue,
        completedTodos,
        totalTodos,
        searchValue,
        filteredTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
