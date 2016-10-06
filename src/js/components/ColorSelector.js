import React from 'react';
import { SimpleRadio } from './SimpleRadio.js';

let ColorSelector = ({ id, color, actualColor, onChangeColor }) => {
  return (
    <div>
      <SimpleRadio 
        identifier = { color } 
        myValue = { color } 
        checkCondition = { actualColor } 
        onChange = { onChangeColor }
      />
      <label 
        for = {
          "radio" + color
        }
      >
        <span 
          class = {
            "bg-color-" + color
          }
        ></span>
      </label>
    </div>
  );
}

export { ColorSelector }
