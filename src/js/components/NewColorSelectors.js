import React from 'react';
import { connect } from 'react-redux';
import { changeNewNoteColor } from '../actions.js';
import { ColorSelectors } from './ColorSelectors.js';

const NewColorSelectors = connect(
  (state, ownProps) => ({
    colors: [1, 2, 3, 4, 5, 6, 7, 8],
    actualColor: state.present.newNote.color,
    noteid: 0
  }), 
  (dispatch, ownProps) => ({
    onChangeColor: (color) => dispatch(changeNewNoteColor(color))
  })
)(ColorSelectors);

export { NewColorSelectors };