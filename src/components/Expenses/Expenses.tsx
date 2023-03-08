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

  return (
    <div className="">
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={expenses[0].title}
          date={expenses[0].date}
          amount={expenses[0].amount}
        />
        <ExpenseItem
          title={expenses[1].title}
          date={expenses[1].date}
          amount={expenses[1].amount}
        />
        <ExpenseItem
          title={expenses[2].title}
          date={expenses[2].date}
          amount={expenses[2].amount}
        />
        <ExpenseItem
          title={expenses[3].title}
          date={expenses[3].date}
          amount={expenses[3].amount}
        />
      </Card>
    </div>
  );
}
