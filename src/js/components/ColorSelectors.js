import React from 'react';
import { connect } from 'react-redux';
import { ColorSelector } from './ColorSelector.js';

const ColorSelectors = ({ colors, noteid,  actualColor, onChangeColor }) => {
  return (
    <div class="color-radios">      
      {
        colors.map(
          color => 
            <ColorSelector 
              key = { "color" + noteid + color } 
              id = { "color" + noteid + color } 
              color = { color } 
              actualColor = { actualColor }
              onChangeColor = { (color) => onChangeColor(color) }
            />
        )
      }
    </div>
  );
}

export { ColorSelectors }