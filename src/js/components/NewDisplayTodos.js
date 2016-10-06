import React from 'react';
import { connect } from 'react-redux';
import { DisplayTodos } from './DisplayTodos.js';
import { deleteTodoNewNote } from '../actions.js';

const NewDisplayTodos = connect(
  (state, ownProps) => ({
    todos: state.present.newNote.todolist,
    note: 0
  }), 
  (dispatch, ownProps) => ({
    actionTodo: (todoid) => dispatch(deleteTodoNewNote(todoid))
  })
)(DisplayTodos);

export { NewDisplayTodos };