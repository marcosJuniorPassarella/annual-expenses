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
  const saveExpenseData = (expense: any) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
}
