import React, { useState } from "react";
import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");

  //props.expenses와 filterYear 상태값에 의존하는 변수로 별도 state로 지정하지 않아도 변경감지가 됨(파생된 상태 개념)
  const filteredExpense = props.expenses.filter(
    (obj) => obj.date.getFullYear().toString() === filterYear
  );

  const changeFilterHandler = (filterYear) => {
    setFilterYear(filterYear);
  };
  return (
    <li>
      <Card className="expenses" onChangeFilter={changeFilterHandler}>
        <ExpensesFilter
          onChangeFilter={changeFilterHandler}
          filterYear={filterYear}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </li>
  );
}

export default Expenses;
