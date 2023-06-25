import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [minimized, setMinimized] = useState(true);

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const inputChangeHandler = (identifier, value) => {
    switch (identifier) {
      case "title":
        setEnteredTitle(value);
        break;
      case "amount":
        setEnteredAmount(value);
        break;
      case "date":
        setEnteredDate(value);
        break;
      default:
        break;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // Clear the form after submitting
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    toggleMinimized();
  };

  function toggleMinimized() {
    setMinimized(!minimized);
  }

  return (
    <form onSubmit={submitHandler}>
      {minimized ? (
        <button onClick={toggleMinimized}>Add Expense</button>
      ) : (
        <div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={(event) => {
                  inputChangeHandler("title", event.target.value);
                }}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                value={enteredAmount}
                onChange={amountChangeHandler}
                min="0.01"
                step="0.01"
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={toggleMinimized}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ExpenseForm;
