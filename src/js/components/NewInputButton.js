import React from 'react';
import { connect } from 'react-redux';
import { addNewTodoNewNote } from '../actions.js';
import { InputButton } from './InputButton.js';


const NewInputButton = connect((state, ownProps) => ({

}), 
(dispatch, ownProps) => ({
  onClickButton: (text) => dispatch(addNewTodoNewNote(text))
}))(InputButton);


export { NewInputButton }
