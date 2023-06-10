import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";
import React from "react";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <input
      className="TodoSearch"
      placeholder="Put your task here."
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}></input>
  );
};

export { TodoSearch };
