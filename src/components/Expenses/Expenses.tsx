import { useState } from "react";
import Card from "../UI/Card/Card";
import ExpenseItem from "../Expenses/ExpenseItem/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

interface ExpensesProps {
  expenses: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}

export default function Expenses({ expenses }: ExpensesProps) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear: string) => {
    console.log("Expenses", selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="">
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
}
