import React from 'react';
import { connect } from 'react-redux';
import { TodoList } from './TodoList.js';
import { EditColorSelectors } from './EditColorSelectors.js';
import { showHumanDate } from '../functions.js';
import { changeNoteTitle, changeNoteContent, setNoteArchived } from '../actions.js';

let Note = ({ note, onChangeTitle, onChangeContent, onArchiveNote }) => {
    let title, content;
    return (<div class = {
      'display-note bg-color-' + (note.color)
    }>
      <input 
        type="text" 
        value = { note.title } 
        placeholder = { (note.title === ""?"(Sin título)":"") }
        ref = { node => title = node }
        onChange = { 
          () => {
            onChangeTitle(title.value);
          }
        }
      />

      {
        (note.type === 'text'?
          <textarea 
            value = { note.content } 
            ref = { node => content = node }
            onChange = {
              () => {
                onChangeContent(content.value)
              }
            }
          >
          </textarea>
        :(note.type === 'todolist' ? <TodoList note = { note } todos = { note.content } /> :'')
        )
      }
      <div class="show-times"><b>Creado el: </b> { showHumanDate(note.created_at) }</div>
      <div class="show-times"><b>Actualizado por última vez, el: </b> { showHumanDate(note.updated_at) }</div>
      <button onClick = { 
        () => {
          onArchiveNote();
        }
      }>{ (note.archived?"Retrieve":"Archive") } </button>
    </div>);
    //<EditColorSelectors note = { note } />
}

Note = connect(
  (state, ownProps) => ({
    note: ownProps.note
  }), 
  (dispatch, ownProps) => ({
    onChangeTitle: (title) => dispatch(changeNoteTitle(ownProps.note.id, title)),
    onChangeContent: (content) => dispatch(changeNoteContent(ownProps.note.id, content)),
    onArchiveNote: () => dispatch(setNoteArchived(ownProps.note.id))
  })
)(Note);

export { Note }