import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // useState always return a (1)variable and a (2)function:
  // (1) points to the managed state variable
  // (2) can be called to update said variable
  // individual state slices:
  const [newTitle, setNewTitle] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newDate, setNewDate] = useState('');

  // listen for changes in the form inputs, whenever one
  // of the input fields changes, its specific function
  // will be called:
  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };

  // listen for click on the button for the 'submit' event:
  const submitHandler = (event) => {
    // prevent reload of the page once the form is submitted:
    event.preventDefault();
    // create new object for the new expense:
    const expenseData = {
      title: newTitle,
      price: +newAmount,
      date: new Date(newDate)
    };
    // execute the function passed as a prop from 'NewExpenses' component
    // and pass it the new expense object as argument:
    props.onSaveExpenseData(expenseData);

    // reset input fields:
    setNewTitle('');
    setNewAmount('');
    setNewDate('');
  };

  const cancelHandler = () => {
    props.onCancelEdit();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={newTitle} onChange={titleChangeHandler} />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={newAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2022-01-01'
            max='2023-12-31'
            value={newDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='button' onClick={cancelHandler}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

/* 
# Using state - Approach 2: 
We could also use a single state instead of individual state slices by doing the 
following:

const [userInput, setUserInput] = useState({
  newTitle: '',
  newAmount: '',
  newDate: '',
});

const titleChangeHandler = (event) => {
  setUserInput({
    ...userInput,
    newTitle: event.target.value,
  });
};
const amountChangeHandler = (event) => {
  setUserInput({
    ...userInput,
    newAmount: event.target.value,
  });
};
const dateChangeHandler = (event) => {
  setUserInput({
    ...userInput,
    newDate: event.target.value,
  });
};

*/
