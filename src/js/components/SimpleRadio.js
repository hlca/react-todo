import React from 'react';

let SimpleRadio = ({ identifier, myValue, checkCondition, onChange }) => {
	return (
		<input 
      type= "radio" 
      id = { "radio" + identifier } 
      name={ "radio" + identifier } 
      checked = { myValue == checkCondition }
      onChange = { () => {
        onChange(myValue);
      } }
    />
	);
}

export { SimpleRadio };