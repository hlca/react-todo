import React from 'react';
import { connect } from 'react-redux';
import { DisplayTodos } from './DisplayTodos.js';
import { editTodoText, toggleTodo } from '../actions.js';

const filterTodos = (todos, filter) => {
	if(filter == 'SHOW_ALL')
		return todos;
	else if(filter == 'SHOW_COMPLETED')
		return todos.filter(t => t.done);
	else if(filter == 'SHOW_ACTIVE')
		return todos.filter(t => !t.done);
}

const EditDisplayTodos = connect(
  (state, ownProps) => ({
    todos: filterTodos(ownProps.todos, ownProps.note.filter_todos),
    note: ownProps.note
  }), 
  (dispatch, ownProps) => ({
    actionTodo: (todoid, text) => dispatch(editTodoText(ownProps.note.id, todoid, text)),
    toggleTodo: (todoid) => dispatch(toggleTodo(ownProps.note.id, todoid))
  })
)(DisplayTodos);

export { EditDisplayTodos };