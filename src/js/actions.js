import { v4 } from 'uuid';

const addNote = (title, type, color, content) => ({
  type: 'ADD_NOTE',
  payload: {
    id: v4(),
    title,
    color,
   	content,
    type
  }
});

const changeNewNoteColor = (color) => ({
  type: 'NEW_NOTE_COLOR',
  payload: {
    color
  }
});

const changeNewNoteType = (type) => ({
  type: 'NEW_NOTE_TYPE',
  payload: {
    type
  }
});

const addNewTodoNewNote = (text) => ({
  type: 'NEW_NOTE_ADD_TODO',
  payload: {
    id: v4(),
    text,
    done: false
  }
});

const addTodo = (noteid, text) => ({
  type: 'ADD_TODO',
  payload: {
    todo: {
      id: v4(),
      text,
      done: false
    },
    noteid: noteid,
  }
});

const changeNoteTitle = (noteid, title) => ({
  type: 'CHANGE_NOTE_TITLE',
  payload: {
    noteid, title
  }
})

const changeNoteContent = (noteid, content) => ({
  type: 'CHANGE_NOTE_CONTENT',
  payload: {
    noteid, content
  }
})

const changeNoteColor = (noteid, color) => ({
  type: 'CHANGE_NOTE_COLOR',
  payload: {
    noteid,
    color
  }
});

const editTodoText = (noteid, todoid, text) => ({
  type: 'EDIT_TODO_TEXT',
  payload: {
    noteid, todoid, text
  }
});

const toggleTodo = (noteid, todoid) => ({
  type: 'TOGGLE_TODO',
  payload: {
    noteid, todoid
  }
});

const deleteTodoNewNote = (todoid) => ({
  type: 'NEW_NOTE_DELETE_TODO',
  payload: {
    todoid
  }
});

const setNoteArchived = (noteid) => ({
  type: 'TOGGLE_NOTE',
  payload: {
    noteid
  }
});

const setFilterTodos = (noteid, filter) => ({
  type: "FILTER_TODOS",
  payload: {
    noteid, filter
  }
});

export { 
  addNote, 
  changeNewNoteColor, 
  changeNewNoteType, 
  addNewTodoNewNote,
  addTodo, 
  changeNoteTitle,
  changeNoteContent,
  changeNoteColor,
  editTodoText,
  deleteTodoNewNote,
  toggleTodo,
  setNoteArchived,
  setFilterTodos
};