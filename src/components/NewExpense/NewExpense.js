import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    //function wich add to the object from ExpensesForm unic id, and through props send to App.js

    setAddNewExpenses(false);
    //after click, form is disapear 
  };

  const [addNewExpenses, setAddNewExpenses] = useState(false)
  const addNewExpensesFun = () => {
    setAddNewExpenses(true)
  }

  const stopEditingHandler = () => {
    setAddNewExpenses(false)
  }


  return (
    <div className="new-expense">
      {addNewExpenses && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelButton={stopEditingHandler} />}
      {/* if addNewExpenses is true show ExpenseForm (onCancelButton return - false)*/}
      {!addNewExpenses && <button onClick={addNewExpensesFun}>Add New</button>}
      {/* if addNewExpenses is false show Button */}
    </div>
  );
};

export default NewExpense;
