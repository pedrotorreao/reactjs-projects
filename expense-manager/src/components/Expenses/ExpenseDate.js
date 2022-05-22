import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(dateProps) {
  const day = dateProps.date.toLocaleString('en-US', { day: '2-digit' });
  const month = dateProps.date.toLocaleString('en-US', { month: 'long' });
  const year = dateProps.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
