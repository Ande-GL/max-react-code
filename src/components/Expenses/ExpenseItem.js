import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const {data, title, amount} = props
  return (
    <Card className="expense-item">
      <ExpenseDate dataED={props.dataEI} />
      <div className="expense-item__description">
        <h2>{props.titleEI}</h2>
        <div className="expense-item__price">{props.amountEI}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
