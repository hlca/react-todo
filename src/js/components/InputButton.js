import React from 'react';
import { connect } from 'react-redux';
import { addNewTodoNewNote } from '../actions.js';

let InputButton = ({ onClickButton }) => {
  let todoText;
  return (
    <div>
      <input 
        type="text"
        placeholder="Ingrese una tarea"
        ref = { node => todoText = node }
      />
      <button onClick = { () => {
        onClickButton(todoText.value);
        todoText.value = "";
      } 
      }>Agregar</button>
    </div>
  );
}

export { InputButton }
