import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (enteredYaer) => {
    setFilteredYear(enteredYaer);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveExpensesFilter={filterChangeHandler}
        />
        <ExpensesList item={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
