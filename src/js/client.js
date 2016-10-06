import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import undoable, { distinctState } from 'redux-undo';

import notes from './reducers/notes';
import newNote from './reducers/newNote';
import visibilityFilter from './reducers/visibilityFilter';
import textFilter from './reducers/textFilter';

import Undo from './components/Undo.js';

import { AddNote } from './components/AddNote.js';
import { Filters } from './components/Filters.js';
import { DisplayNotes } from './components/DisplayNotes.js';

import '../css/styles.scss';

var stateHistory = [];

const loadState = () => {
  try{
    let result = JSON.parse(localStorage.getItem('state'));
    return result ? {past:[], present:result, future:[]} : undefined;
  }
  catch(err){
    return undefined;
  }
}

const saveState = (state) => {
  try{
    localStorage.setItem('state', JSON.stringify(state.present));
  }
  catch(err){
    // Log
  }
}


const notesApp = combineReducers({
  notes,
  newNote, 
  visibilityFilter,
  textFilter
});

let store = createStore(undoable(notesApp), loadState());

const NotesApp = ({ todos }) => (
  <div>
    <AddNote />
    <DisplayNotes />

    <Undo />
    <Filters />
  </div>
);

const render = () => {
  ReactDOM.render(
    <Provider store = { store }>
      <NotesApp />
    </Provider>,
    document.getElementById('root')
  );
}

render();


store.subscribe(() => {
  saveState(store.getState());
});