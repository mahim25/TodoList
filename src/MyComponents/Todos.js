import React from "react";
import { Todoitem } from "./TodoItem";
import "./todos.css";

export const Todos = (props) => {
  // Check if props.Todos is not null or undefined and is an array
  const todos = Array.isArray(props.Todos) ? props.Todos : [];

  return (
    <div className="container">
      <h2 className="cont-title">Todos List</h2>
      {todos.length === 0 ? (
        <span style={{ color: "red", fontWeight: "bold" }}>
          “We’re out of time, let’s go!” <br />-Simon Riley(Ghost)
        </span>
      ) : (
        todos.map((todo) => {
          return (
            <>
              <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
              <hr />
            </>
          );
        })
      )}
    </div>
  );
};
