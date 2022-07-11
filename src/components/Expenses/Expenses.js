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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveExpensesFilter={filterChangeHandler}
        />
        {props.item.map((expe) => (
          <ExpenseItem
            dataEI={expe.date}
            titleEI={expe.title}
            amountEI={expe.amount}
          />
        ))}
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
