import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

// stateful component:
function Expenses(expenseData) {
  // useState always return a (1)variable and a (2)function:
  // (1) points to the managed state variable
  // (2) can be called to update said variable
  const [newfilterSelection, setNewFilterSelection] = useState('2020');

  const saveFilterSelection = (filterSelection) => {
    setNewFilterSelection(filterSelection);
  };

  // Filter expenses to only show the expenses that match the selected year:
  const filteredExpenseData = expenseData.data.filter((currentExpense) => {
    return currentExpense.date.getFullYear().toString() === newfilterSelection;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={newfilterSelection}
          onFilterSelectionChange={saveFilterSelection}
        />
        <ExpensesChart expenses={filteredExpenseData} />
        <ExpensesList items={filteredExpenseData} />
      </Card>
    </div>
  );
}

export default Expenses;

/*
-- Outputing conditional content:
1.
  { (filteredExpenseData.length === 0) ? 
      (<p>No expenses found for ${newfilterSelection}</p>)
      :
      (
        filteredExpenseData.map((currentExpense) => (
            <ExpenseItem
              key={currentExpense.id}
              date={currentExpense.date}
              title={currentExpense.title}
              price={currentExpense.price}
            />
        ))
      )
  }

2.
  {
    filteredExpenseData.length === 0 && 
      <p>No expenses found for ${newfilterSelection}</p>
  }
  {
    filteredExpenseData.length > 0 && 
      (
        filteredExpenseData.map((currentExpense) => (
            <ExpenseItem
              key={currentExpense.id}
              date={currentExpense.date}
              title={currentExpense.title}
              price={currentExpense.price}
            />
        ))
      )
  }
*/
