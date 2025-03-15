import React from 'react'


export const Todoitem = ({todo, onDelete}) => {
  return (
    <div className='container'>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button className="delete btn btn-sm btn-danger"  onClick={ ()=> {onDelete(todo)}}>DELETE</button>
    </div>
  );
}
