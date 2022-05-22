import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const filterSelectionHandler = (event) => {
    props.onFilterSelectionChange(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter Expenses by Year</label>
        <select value={props.selected} onChange={filterSelectionHandler}>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

/*
In the following snippet:
  <select value={props.selected} onChange={filterSelectionHandler}>

we are passing a "pointer" at the to-be-executed function, i.e. 'filterSelectionHandler', as a value to onClick. Then, this function gets executed "on your behalf" by React when the event occurs. 
*/
