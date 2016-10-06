import React from 'react';
const Link = ({ active, onClick, children }) => {
  if(active){
    return <strong>{ children }</strong>;
  }
  return <a href="#" onClick={ onClick }>{ children }</a>;
}

export { Link };