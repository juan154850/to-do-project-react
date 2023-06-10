import React from "react";
import "./TodosError.css"

function TodosError() {
  return (
    <div className="error-container">
      <div className="error-icon">!</div>
      <p className="error-message">An error has ocurred. Contact with the administrator to fix the problem.</p>
    </div>
  );
}

export { TodosError };
