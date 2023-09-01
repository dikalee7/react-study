import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../ui/Card";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
