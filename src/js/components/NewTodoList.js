import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { NewInputButton } from './NewInputButton.js';
import { NewDisplayTodos } from './NewDisplayTodos.js';

let NewTodoList = ({ todos }) => {
  let title, noteType = "text", textContent;
  return (
    <div>
      <NewInputButton />
      <NewDisplayTodos note = { 0 } />
    </div>
  );
}

NewTodoList = connect()(NewTodoList);


export { NewTodoList };