import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    // we get "event" object atomatically. We don't need to do anything to get this
    setEnteredTitle(event.target.value);
    // event object continue a banch of element (we can see it throgh the console.log(event) but we need a special "event.target.value")
  };
  const [enteredAmont, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // prevent default browsers behaver - reload page after form submitted (after ckick button)

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmont,
      data: new Date(enteredDate),
    };
    // create an object with our value
    
    props.onSaveExpenseData(expenseData)

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // for reset value in the input fields - after creation object reinitiate it with empty string, as it was
  };

  return (
    <form onSubmit={submitHandler}>
      {/* we use onSubmit instead onClick in button */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            // for reset value in the input field - adding value attribute and bind this to enteredTitle (Adding Two-Way Binding) - so we also feed the state back into the input (so that when we change the state, we also change input)
            onChange={titleChangeHandler}
            // we also can use onImput, but onChange event - for all inputs types
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmont}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        {/* we don't need add onClick listener. then we have a <form> with <button type='submit'> </button>  */}
      </div>
    </form>
  );
};

export default ExpenseForm;
