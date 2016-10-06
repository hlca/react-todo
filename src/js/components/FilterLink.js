import React from 'react';
import { connect } from 'react-redux';
import { Link } from './Link.js';

const FilterLink = connect(
  (state, ownProps) => ({
    active: ownProps.filter === state.present.visibilityFilter
  }),
  (dispatch, ownProps) => ({
    onClick: (e) => {
      e.preventDefault();

      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        payload: {
          visibilityFilter: ownProps.filter
        }
      })
    }
  })
)(Link);

export { FilterLink };