import "./ExpenseItem.css";

const ExpenseItem = (myprops) => {
  // const {dta, ttl, amnt} = myprops
  const day = myprops.dta.toLocaleString('en-US', {day:'2-digit'})
  const month = myprops.dta.toLocaleString('en-US', {month:'long'})
  const year = myprops.dta.getFullYear()
  return (
    <div className="expense-item">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{myprops.ttl}</h2>
        <div className="expense-item__price">{myprops.amnt}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
