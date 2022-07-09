import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (enteredYaer) => {
    setFilteredYear(enteredYaer);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p className="empty-expense-content">Nothing HERE</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        dataEI={expense.date}
        titleEI={expense.title}
        amountEI={expense.amount}
      />
    ))
  }

  console.log(filteredYear);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveExpensesFilter={filterChangeHandler}
        />
        {expensesContent}
        {/* <ExpenseItem
          dataEI={props.item[0].date}
          titleEI={props.item[0].title}
          amountEI={props.item[0].amount}
        />
        <ExpenseItem
          dataEI={props.item[1].date}
          titleEI={props.item[1].title}
          amountEI={props.item[1].amount}
        />
        <ExpenseItem
          dataEI={props.item[2].date}
          titleEI={props.item[2].title}
          amountEI={props.item[2].amount}
        />
        <ExpenseItem
          dataEI={props.item[3].date}
          titleEI={props.item[3].title}
          amountEI={props.item[3].amount}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
