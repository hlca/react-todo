import React from 'react';
import { connect } from 'react-redux';
import { Note } from './Note.js';


let DisplayNotes = ({ notes }) => {
	return (
		<div class="show-notes">
			{
				notes.map(
					note => (
						<Note key = { note.id } note = { note }/>
					)
				)
			}
		</div>
	);
}

const textFilter = (notes, textFilter) => {
	return notes.filter( n => ( 
		n.title.toLowerCase().indexOf(textFilter.toLowerCase()) != -1
		||
		JSON.stringify(n.content).toLowerCase().indexOf(textFilter.toLowerCase()) != -1
	) );
}

const filterNotes = (notes, filter) => {

	if(filter === "SHOW_ALL"){
		return notes.filter(n => !n.archived);;
	}else if(filter === "SHOW_TODOS"){
		return notes.filter(n => (n.type === "todolist" && !n.archived));
	}
	else if(filter === "SHOW_NOTES"){
		return notes.filter(n => n.type === "text" && !n.archived);
	}else if(filter === "SHOW_ARCHIVED") {
		return notes.filter(n => n.archived);
	}
	return notes;
}

DisplayNotes = connect(
	(state, ownProps) => ({
	  notes: textFilter(filterNotes(state.present.notes.present, state.present.visibilityFilter), state.present.textFilter)
	}), 
	(dispatch, ownProps) => ({
	  
	})
)(DisplayNotes);

export { DisplayNotes }