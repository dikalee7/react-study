import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");

  // const [filteredExpense, setFilteredExpense] = useState([...props.expenses]);
  // useEffect(() => {
  //   setFilteredExpense(
  //     props.expenses.filter(
  //       (obj) => obj.date.getFullYear().toString() === filterYear
  //     )
  //   );
  // }, [props.expenses, filterYear]);

  //props.expenses와 filterYear 상태값에 의존하는 변수로 별도 state로 지정하지 않아도 변경감지가 됨(파생된 상태 개념)
  const filteredExpense = props.expenses.filter(
    (obj) => obj.date.getFullYear().toString() === filterYear
  );

  const changeFilterHandler = (filterYear) => {
    setFilterYear(filterYear);
  };
  return (
    <>
      <Card className="expenses" onChangeFilter={changeFilterHandler}>
        <ExpensesFilter
          onChangeFilter={changeFilterHandler}
          filterYear={filterYear}
        />
        {filteredExpense.map((expense) => (
          <ExpenseItem expense={expense} key={expense.id} />
        ))}
      </Card>
    </>
  );
}

export default Expenses;
