import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (!props.items.length) {
    return (
      <h2 className='expenses-list__fallback'>
        No expenses found for the selected year
      </h2>
    );
  }

  return (
    <ul className='expenses-list'>
      {
        // dynamically rendering a list:
        props.items.map((currentExpense) => (
          <ExpenseItem
            key={currentExpense.id}
            date={currentExpense.date}
            title={currentExpense.title}
            price={currentExpense.price}
          />
        ))
      }
    </ul>
  );
};

export default ExpensesList;
