import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  // const titleChangeHandler = (event) => {
  //   // 아래와 같이 상태 업데이트 할 경우 단독 업데이트가 아닌 여러 프로세스에서 업데이트 될 경우 최신 상태를 보장하지 못함
  //   // 왜냐하면, 상태 업데이트를 예약하는 것으로 즉시 실행되지 않기 때문임
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value,
  //   // });

  //   // 업데이트 되는 순간 기존 상태의 최신값을 보장하기 위해
  //   // 아래와 같이 함수 형태로 전달하여 예약된 상태 업데이트가 수행될때 이전 상태를 참조할 수 있도록 하여야 함
  //   // setUserInput((prevState) => {
  //   //   return {
  //   //     ...prevState,
  //   //     enteredTitle: event.target.value,
  //   //   };
  //   // });

  //   setEnteredTitle(event.target.value);
  // };

  // const amountChangeHandler = (event) => {
  //   // setUserInput((prevState) => {
  //   //   return {
  //   //     ...prevState,
  //   //     enteredAmount: event.target.value,
  //   //   };
  //   // });
  //   setEnteredAmount(event.target.value);
  // };

  // const dateChangeHandler = (event) => {
  //   // setUserInput((prevState) => {
  //   //   return {
  //   //     ...prevState,
  //   //     enteredDate: event.target.value,
  //   //   };
  //   // });
  //   setEnteredDate(event.target.value);
  // };

  const execFn = {};
  execFn["title"] = setEnteredTitle;
  execFn["amount"] = setEnteredAmount;
  execFn["date"] = setEnteredDate;

  const inputChangeHandler = (identifier, value) => {
    execFn[identifier](value.trim());
  };

  const initFun = () => {
    for (const key in execFn) {
      if (Object.hasOwnProperty.call(execFn, key)) {
        execFn[key]("");
      }
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    for (const key in expenseData) {
      if (Object.hasOwnProperty.call(expenseData, key)) {
        const element = expenseData[key];
        if (!element) {
          document.getElementById(key).focus();
          alert(`${key}값은 필수입니다.`);
          return false;
        }
      }
    }
    console.log(expenseData);
    initFun();
    onSaveExpenseData(expenseData);
  };

  const onCancelHandler = (event) => {
    event.preventDefault();
    onCancel();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            id="title"
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amount"
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
            onChange={(event) => inputChangeHandler("date", event.target.value)}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
