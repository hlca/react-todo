import React from 'react';
import { connect } from 'react-redux';
import { changeNoteColor } from '../actions.js';
import { ColorSelectors } from './ColorSelectors.js';

const EditColorSelectors = connect(
  (state, ownProps) => ({
    colors: [1, 2, 3, 4, 5, 6, 7, 8],
    actualColor: ownProps.note.color,
    noteid: ownProps.note.id
  }), 
  (dispatch, ownProps) => ({
    onChangeColor: (color) => dispatch(changeNoteColor(ownProps.note.id, color))
  })
)(ColorSelectors);

export { EditColorSelectors };