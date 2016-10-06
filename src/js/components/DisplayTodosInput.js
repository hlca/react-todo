import React from 'react';
import { connect } from 'react-redux';

let DisplayTodosInput = ({ todo, noteid, actionTodo }) => {
	let todoText;
	return (<input type="text"
	  value = { todo.text }
	  ref = { node => todoText = node }
	  onChange = {
	    () => {
	      actionTodo(todo.id, todoText.value);
	    }
	  }
	/>);
}

export { DisplayTodosInput } 