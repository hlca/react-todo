// import undoable, { distinctState } from 'redux-undo'

let estadoInicial = { color: 1, type: "text", todolist: [] };
const newNote = (state = estadoInicial, action) => {
	switch(action.type){
		case 'ADD_NOTE':
			return estadoInicial;
		case 'NEW_NOTE_COLOR':
			return { color: action.payload.color, type: state.type, todolist: state.todolist };
		case 'NEW_NOTE_TYPE':
			return { color: state.color, type: action.payload.type, todolist: state.todolist };
		case 'NEW_NOTE_ADD_TODO':
			return { color: state.color, type: state.type, todolist: [...state.todolist, action.payload ]}
		case 'NEW_NOTE_DELETE_TODO':
			let newContent = state.todolist.map( todo => {
	  		if(todo.id === action.payload.todoid){
	  			return;
	  		}
	  		return todo;
	  	});
	  	newContent = newContent.filter( t => t != undefined);
	  	return {
	      	type: state.type, 
	      	todolist: newContent,
	      	color: state.color
	    	};
		default:
			return state;
	}
}
// const undoableNewNote = undoable(newNote, {
//   filter: distinctState(),
//   limit: 5
// }, estadoInicial);

export default newNote;