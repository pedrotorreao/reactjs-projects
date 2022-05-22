// needed in the past to convert/use JSX:
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';

const DUMMY_EXPENSES = [
  {
    id: 'e00',
    date: new Date(),
    title: 'Rent',
    price: 1200.0
  },
  {
    id: 'e01',
    date: new Date(),
    title: 'Groceries',
    price: 243.0
  },
  {
    id: 'e02',
    date: new Date(),
    title: 'Books',
    price: 198.0
  },
  {
    id: 'e03',
    date: new Date(),
    title: 'Trip',
    price: 873.0
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // this function is passed down to 'NewExpenses' as a prop in order
  // to retrieve the new expense data:
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;

/*
<h2>Let's get started!</h2>
      <ExpenseItem
        date={expenseData[0].date}
        title={expenseData[0].title}
        price={expenseData[0].price}
      />
      <ExpenseItem
        date={expenseData[1].date}
        title={expenseData[1].title}
        price={expenseData[1].price}
      />
      <ExpenseItem
        date={expenseData[2].date}
        title={expenseData[2].title}
        price={expenseData[2].price}
      />
      <ExpenseItem
        date={expenseData[3].date}
        title={expenseData[3].title}
        price={expenseData[3].price}
      />
*/

/*
--Notes:
Components in React are just functions that return JSX code.

React doesn't care whether you changed some variable values. It'll not re-evaluate the component function. It only does that for changes to registered state values (created via useState)

useState returns an array with exactly two elements - the second element is always a function which you can call to set a new value for your state. Calling that function will then also trigger React to re-evaluate the component.
*/
