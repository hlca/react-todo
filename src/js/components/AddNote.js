import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { addNote, changeNewNoteType } from '../actions.js';
import { NewColorSelectors } from './NewColorSelectors.js';
import { NewTodoList } from './NewTodoList.js';


let AddNote = ({ actualColor, actualType, actualTodo, onChangeType, onAddNote }) => {
  let title, noteType = "text", textContent;
  return (
    <div class = { "input-box bg-color-" + actualColor }>
      <label>Título</label>
      <input type="text" ref = { node => title = node } />
      <label>Tipo</label>
      <input type="radio" name="note-type" onChange = { () => onChangeType("text") } defaultChecked={ true }/>
      <input type="radio" name="note-type" onChange = { () => onChangeType("todolist") } />
      <label>Color</label>
      <NewColorSelectors />
      <div class = { (actualType === "text"?"":"no-visible") } >
        <label>Contenido</label>
        <textarea ref = { node => textContent = node }></textarea>
      </div>
      <div class= { "input-group " + (actualType === "todolist"?"":"no-visible") }>
        <label class="new-todo-list">Lista</label>
        <NewTodoList />
      </div>
      <button class= "save-note-button" 
        onClick={
          () => { 
            onAddNote(title.value, actualType, actualColor, (actualType === "text"?textContent.value:actualTodo));
            textContent.value = "";
            title.value = "";
          }
        }
      >Add Note</button>
      <div class="clearfix"></div>
    </div>
  );
}


AddNote = connect((state, ownProps) => ({
  actualColor: state.present.newNote.color,
  actualType: state.present.newNote.type,
  actualTodo: state.present.newNote.todolist
}), 
(dispatch, ownProps) => ({
  onChangeType: (type) => dispatch(changeNewNoteType(type)),
  onAddNote: (title, type, color, content) => dispatch(addNote(title, type, color, content))
}))(AddNote);


export { AddNote };