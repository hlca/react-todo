import React from 'react';
import { connect } from 'react-redux';
import { addNewTodoNewNote } from '../actions.js';
import { DisplayTodosInput } from './DisplayTodosInput.js';
import { FilterTodos } from './FilterTodos.js';
import { v4 } from 'uuid';

let DisplayTodos = ({ todos, note, actionTodo, toggleTodo }) => {
  let todoText;
  if(todos === undefined) todos = [];
  return (
    <div>
      <ul>
       {
        todos.map(todo => (
          <div 
            class= { "todo" + ( todo.done?" done-todo":"" ) }
            key = { todo.id } 
          >
            {
              (note === 0?
                 todo.text 
              :
               <DisplayTodosInput todo = { todo } noteid = { note.id } actionTodo = { actionTodo }/>
              )

            }
            {(note === 0?
              <div 
                class="delete-todo"
                onClick = {
                  () => {
                    actionTodo(todo.id);
                  }
                }
              >
                &times;
              </div>
            :
              <div
                class= { "toggle-todo" + (todo.done?" todo-done":" todo-undone") }
                onClick = {
                  () => {
                    toggleTodo(todo.id)
                  }
                }
              >
                { todo.done?"×":"✔" }
              </div>
            )}
          </div>
        ))
       }
      </ul>
      { (note.id === 0 && note !== 0?"": <FilterTodos note = { note }/> ) } 
      <div class="clearfix"></div>
    </div>
  );
}


//DisplayTodos = connect()(DisplayTodos);


export { DisplayTodos }
