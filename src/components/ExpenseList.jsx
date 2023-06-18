import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseItemList(props) {
  return (
    <div className="expenses">
      <ExpenseItem expenses={props.expenses[0]} />
      <ExpenseItem expenses={props.expenses[1]} />
      <ExpenseItem expenses={props.expenses[2]} />
      <ExpenseItem expenses={props.expenses[3]} />
    </div>
  );
}

export default ExpenseItemList;
