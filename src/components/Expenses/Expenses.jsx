import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const ExpenseItemList = (props) => {
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const dropdownChangeHandler = (enteredYear) => {
    setYear(enteredYear);
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onDropdownChange={dropdownChangeHandler} />
      <ExpenseItem expenses={props.expenses[0]} />
      <ExpenseItem expenses={props.expenses[1]} />
      <ExpenseItem expenses={props.expenses[2]} />
      <ExpenseItem expenses={props.expenses[3]} />
    </Card>
  );
};

export default ExpenseItemList;
