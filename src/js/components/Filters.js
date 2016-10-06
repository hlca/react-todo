import React from 'react';
import { FilterLink } from './FilterLink.js';
import { FilterText } from './FilterText.js';

const Filters = () => (
  <div>
    Show:
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    {' '}
    <FilterLink filter="SHOW_NOTES">Notes</FilterLink>
    {' '}
    <FilterLink filter="SHOW_TODOS">ToDos</FilterLink>
    {' '}
    <FilterLink filter="SHOW_ARCHIVED">Archived</FilterLink>
    {' '}
    <FilterText />
  </div>
);

export { Filters }