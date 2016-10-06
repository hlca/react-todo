import React from 'react';
import { FilterLinkTodo } from './FilterLinkTodo.js';

const FilterTodos = ({ note }) => (
  <div>
    Show:
    <FilterLinkTodo note= {note} filter="SHOW_ALL">All</FilterLinkTodo>
    {' '}
    <FilterLinkTodo note= {note} filter="SHOW_COMPLETED">Completed</FilterLinkTodo>
    {' '}
    <FilterLinkTodo note= {note} filter="SHOW_ACTIVE">Active</FilterLinkTodo>
  </div>
);

export { FilterTodos }