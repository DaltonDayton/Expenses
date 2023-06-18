import ExpenseItemDate from "./ExpenseItemDate";
import "./ExpenseItem.css";

function ExpenseItem({ expenses }) {
  return (
    <div className="expense-item">
      <ExpenseItemDate date={expenses.date} />
      <div className="expense-item__description">
        <h2>{expenses.title}</h2>
        <div className="expense-item__price">${expenses.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
