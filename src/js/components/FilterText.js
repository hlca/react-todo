import React from 'react';
import { connect } from 'react-redux';

let FilterText = ({ onChangeText }) => {
  let filterText;
  return (<div>
    <input type="text"
      ref = { node => filterText = node }
      onChange = {
        () => {
          onChangeText(filterText.value)
        }
      }
    />
    </div>
  );
}

FilterText = connect(
  (state, ownProps) => ({
    
  }),
  (dispatch, ownProps) => ({
    onChangeText: (text) => {

      dispatch({
        type: 'SET_TEXT_FILTER',
        payload: {
          textFilter : text
        }
      })
    }
  })
)(FilterText);

export { FilterText };