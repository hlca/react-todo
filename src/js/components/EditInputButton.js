import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions.js';
import { InputButton } from './InputButton.js';


const EditInputButton = connect((state, ownProps) => ({

}), 
(dispatch, ownProps) => ({
  onClickButton: (text) => dispatch(addTodo(ownProps.id, text))
}))(InputButton);


export { EditInputButton }
