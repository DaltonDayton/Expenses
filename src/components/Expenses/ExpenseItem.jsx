import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem({ expenses }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenses.date} />
      <div className="expense-item__description">
        <h2>{expenses.title}</h2>
        <div className="expense-item__price">${expenses.amount.toFixed(2)}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
