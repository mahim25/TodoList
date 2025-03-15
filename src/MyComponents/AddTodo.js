import React from "react";
import { useState } from "react";
import "./AddTodo.css";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if(!title || !description){
      alert("Please Give The Right Input")
    }
    else{
      props.addTodo(title, description);
    setTitle("");
    setDescription("");
    };
    
  };
  return (
    <div className="cointainer">
      <form onSubmit={submit}>
        <div className="addtask">
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            classNameName="Classform form-control"
            placeholder="Task Name"
          />

          <textarea
            type="text"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            classNameName="Classform form-control"
            placeholder="Task Description"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-sm btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
