import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredExpense, setFilteredExpense] = useState([...props.expenses]);
  const [filterYear, setFilterYear] = useState("2022");

  useEffect(() => {
    setFilteredExpense(
      props.expenses.filter(
        (obj) => obj.date.getFullYear().toString() === filterYear
      )
    );
  }, [props.expenses, filterYear]);

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
