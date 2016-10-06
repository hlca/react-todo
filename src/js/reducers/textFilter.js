const textFilter = (state = '', action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return action.payload.textFilter;
    default:
      return state;
  }
}

export default textFilter;