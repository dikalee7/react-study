import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import "./ExpenseItem.css";
import "../ui/Card.css";

function ExpenseItem({ expense }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
