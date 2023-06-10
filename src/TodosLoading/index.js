import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
}

export { TodosLoading };
