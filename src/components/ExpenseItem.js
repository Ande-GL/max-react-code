import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (myprops) => {
  // const {dta, ttl, amnt} = myprops
  return (
    <div className="expense-item">
      <ExpenseDate dta={myprops.dta} />
      <div className="expense-item__description">
        <h2>{myprops.ttl}</h2>
        <div className="expense-item__price">{myprops.amnt}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
