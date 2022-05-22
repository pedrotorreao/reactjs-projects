import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// stateless component:
function ExpenseItem(expenseProps) {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={expenseProps.date} />
        <div className='expense-item__description'>
          <h2>{expenseProps.title}</h2>
          <div className='expense-item__price'>{`$` + expenseProps.price}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
