import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
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
      />
    </Card>
  );
};

export default Expenses;
