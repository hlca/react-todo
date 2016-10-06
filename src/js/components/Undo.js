import React from 'react'

import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'


let Undo = ({ canUndo, onUndo }) => (
  <p>
    <button onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
  </p>
)


const mapStateToProps = (state) => {
  return {
    canUndo: state.present.notes.past.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo())
  }
}

Undo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Undo)

export default Undo;