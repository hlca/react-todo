import React from 'react';
import { connect } from 'react-redux';
import { Link } from './Link.js';

import { setFilterTodos } from '../actions.js'; 

const FilterLinkTodo = connect(
  (state, ownProps) => ({
    active: ownProps.filter === ownProps.note.filter_todos
  }),
  (dispatch, ownProps) => ({
    onClick: (e) => {
      e.preventDefault();

      dispatch(setFilterTodos(ownProps.note.id, ownProps.filter))
    }
  })
)(Link);

export { FilterLinkTodo };