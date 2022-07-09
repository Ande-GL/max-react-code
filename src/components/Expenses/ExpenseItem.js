import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.titleEI);
  const x = "get it";
  const clickHandler = () => {
    if (title === x) {
      setTitle(props.titleEI);
    } else {
      setTitle(x);
    }
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate dataED={props.dataEI} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amountEI}</div>
          <button onClick={clickHandler}>Done</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
