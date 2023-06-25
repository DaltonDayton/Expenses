import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020);
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setFilteredExpenses(props.items);
    setFilteredExpenses((filteredExpenses) => {
      return filteredExpenses.filter(
        (expense) => expense.date.getFullYear().toString() === selectedYear
      );
    });
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} expenses={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
