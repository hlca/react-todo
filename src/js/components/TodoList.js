import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { EditInputButton } from './EditInputButton.js';
import { EditDisplayTodos } from './EditDisplayTodos.js';

let TodoList = ({ note, todos }) => {
  let title, noteType = "text", textContent;
  return (
    <div>
      <EditInputButton id = { note.id } />
      <EditDisplayTodos note = { note } todos = { todos } />
    </div>
  );
}

TodoList = connect()(TodoList);


export { TodoList };