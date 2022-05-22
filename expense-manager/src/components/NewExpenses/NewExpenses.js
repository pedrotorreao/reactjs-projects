import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpenses = (props) => {
  //
  const [editActive, setEditActive] = useState(false);

  // this function is passed down to 'ExpenseForm' as a prop:
  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    };

    // execute the function passed as a prop from the 'App' component
    // and pass it the new expense object as argument, thus lifting
    // this state up one more level:
    props.onAddExpense(expenseData);

    // close form editor:
    setEditActive(false);
  };

  const editActiveHandler = () => {
    setEditActive(true);
  };

  const editInactiveHandler = () => {
    setEditActive(false);
  };

  return (
    <div className='new-expense'>
      {!editActive && (
        <button onClick={editActiveHandler}>Add New Expense</button>
      )}
      {editActive && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEdit={editInactiveHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
