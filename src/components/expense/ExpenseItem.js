import React, { useState } from 'react'
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import "./ExpenseItem.css";
import "../ui/Card.css";

function ExpenseItem({ expense }) {

    const [title, setTitle] = useState(expense.title);
    // let title = expense.title;

    const clickHandler = () => {
        setTitle('Updated!!!')
        console.log(title)
    }

  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div> : 
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
