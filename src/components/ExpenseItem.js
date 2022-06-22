import "./ExpenseItem.css";

const ExpenseItem = (myprops) => {
  // const {dta, ttl, amnt} = myprops
  return (
    <div className="expense-item">
      <div>{myprops.dta.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{myprops.ttl}</h2>
        <div className="expense-item__price">{myprops.amnt}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
