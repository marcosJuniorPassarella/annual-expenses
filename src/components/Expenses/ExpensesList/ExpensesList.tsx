import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { ExpensesProps } from "../Expenses";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }: ExpensesProps) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list_fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
