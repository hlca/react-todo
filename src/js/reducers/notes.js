import undoable, { distinctState } from 'redux-undo'

const notes = (state = [], action) => {
	let newState;
	switch(action.type){
		case 'ADD_NOTE':
			let date = new Date();
			let dateTimestamp = date.getTime();
			newState = [...state, {
				...action.payload, 
				filter_todos: "SHOW_ALL",
				created_at: dateTimestamp,
				updated_at: dateTimestamp,
				archived: false
			}];
			return newState;
		case 'ADD_TODO':
			newState = state.map(
				note => {
					if(note.id === action.payload.noteid){
						let date = new Date();
						let dateTimestamp = date.getTime();
						return {
							id: note.id,
							title: note.title,
							type: note.type,
							content: [...note.content, { ...action.payload.todo }],
							color: note.color,
							filter_todos: note.filter_todos,
							created_at: note.created_at,
							updated_at: dateTimestamp,
							archived: note.archived,
						}
					}else{
						return note;
					}
				}
			);
			return newState;
		case 'EDIT_TODO_TEXT':
			newState = state.map(
				note => {
					if(note.id === action.payload.noteid){
						let date = new Date();
						let dateTimestamp = date.getTime();

						let newContent = note.content.map( todo => {
				  		if(todo.id === action.payload.todoid){
				  			return {id: todo.id,
						      text: action.payload.text,
						      done: todo.done};
				  		}
				  		return todo;
				  	});
						return {	
							id: note.id,
							title: note.title,
							type: note.type,
							content: newContent,
							color: note.color,
							filter_todos: note.filter_todos,
							created_at: note.created_at,
							updated_at: dateTimestamp,
							archived: note.archived,
						}
					}else{
						return note;
					}
				}
			);
			return newState;
		case 'TOGGLE_TODO':
			newState = state.map(
				note => {
					if(note.id === action.payload.noteid){
						let date = new Date();
						let dateTimestamp = date.getTime();

						let newContent = note.content.map( todo => {
				  		if(todo.id === action.payload.todoid){
				  			return {id: todo.id,
						      text: todo.text,
						      done: !todo.done};
				  		}
				  		return todo;
				  	});
						return {	
							id: note.id,
							title: note.title,
							type: note.type,
							content: newContent,
							color: note.color,
							filter_todos: note.filter_todos,
							created_at: note.created_at,
							updated_at: dateTimestamp,
							archived: note.archived,
						}
					}else{
						return note;
					}
				}
			);
			return newState;
		case 'CHANGE_NOTE_TITLE':
			newState = state.map(
				note => {
					if(note.id === action.payload.noteid){
						let date = new Date();
						let dateTimestamp = date.getTime();
						return {
							id: note.id,
							title: action.payload.title,
							type: note.type,
							content: note.content,
							color: note.color,
							filter_todos: note.filter_todos,
							created_at: note.created_at,
							updated_at: dateTimestamp,
							archived: note.archived,
						}
					}else{
						return note;
					}
				}
			);
			return newState;
		case 'CHANGE_NOTE_COLOR':
			newState = state.map(
				note => {
					if(note.id === action.payload.noteid){
						let date = new Date();
						let dateTimestamp = date.getTime();
						return {
							id: note.id,
							title: note.title,
							type: note.type,
							content: note.content,
							color: action.payload.color,
							filter_todos: note.filter_todos,
							created_at: note.created_at,
							updated_at: dateTimestamp,
							archived: note.archived,
						}
					}else{
						return note;
					}
				}
			);
			return newState;
		case 'CHANGE_NOTE_CONTENT':
			newState = state.map(
				note => {
					if(note.id === action.payload.noteid){
						let date = new Date();
						let dateTimestamp = date.getTime();
						return {
							id: note.id,
							title: note.title,
							type: note.type,
							content: action.payload.content,
							color: note.color,
							filter_todos: note.filter_todos,
							created_at: note.created_at,
							updated_at: dateTimestamp,
							archived: note.archived,
						}
					}else{
						return note;
					}
				}
			);
			return newState;

		case 'TOGGLE_NOTE':
			newState = state.map(
				note => {
					if(note.id === action.payload.noteid){
						let date = new Date();
						let dateTimestamp = date.getTime();
						return {
							id: note.id,
							title: note.title,
							type: note.type,
							content: note.content,
							color: note.color,
							filter_todos: note.filter_todos,
							created_at: note.created_at,
							updated_at: dateTimestamp,
							archived: !note.archived,
						}
					}else{
						return note;
					}
				}
			);
			return newState;

		case 'FILTER_TODOS':
		console.log(action.payload);
			newState = state.map(
				note => {
					if(note.id === action.payload.noteid){
						let date = new Date();
						let dateTimestamp = date.getTime();
						return {
							id: note.id,
							title: note.title,
							type: note.type,
							content: note.content,
							color: note.color,
							filter_todos: action.payload.filter,
							created_at: note.created_at,
							updated_at: dateTimestamp,
							archived: note.archived,
						}
					}else{
						return note;
					}
				}
			);
			return newState;
		default:
			return state;
	}
}

const undoableNotes = undoable(notes, {
  filter: distinctState(),
  limit: 5
})

export default undoableNotes;