import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../../Expenses/ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

interface ExpenseItemProps {
  title: string;
  date: Date;
  amount: number;
}

export default function ExpenseItem({ title, date, amount }: ExpenseItemProps) {
  const [modifiedTitle, setModifiedTitle] = useState(title);

  const clickHandler = () => {
    setModifiedTitle("JETTA");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{modifiedTitle}</h2>
        <div className="expense-item__price"> ${amount} </div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
