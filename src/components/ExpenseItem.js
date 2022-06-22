import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (myprops) => {
  // const {data, title, amount} = myprops
  return (
    <Card className="expense-item">
      <ExpenseDate dataED={myprops.dataEI} />
      <div className="expense-item__description">
        <h2>{myprops.titleEI}</h2>
        <div className="expense-item__price">{myprops.amountEI}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
