import "./ExpenseItem.css";
import ExpenseDate from "../../Expenses/ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

interface ExpenseItemProps {
  title: string;
  date: Date;
  amount: number;
}

export default function ExpenseItem({ title, date, amount }: ExpenseItemProps) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price"> ${amount} </div>
        </div>
      </Card>
    </li>
  );
}
