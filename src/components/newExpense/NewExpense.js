import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addFlag, setAddFlag] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setAddFlag(false);
  };

  const cancelHandler = () => {
    setAddFlag(false);
  };
  return (
    <div className="new-expense">
      {!addFlag && (
        <button onClick={() => setAddFlag(true)}>Add Expense</button>
      )}
      {addFlag && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
