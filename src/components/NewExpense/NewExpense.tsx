import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props: {
  onAddExpense: (expense: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseData = (expense: any) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
