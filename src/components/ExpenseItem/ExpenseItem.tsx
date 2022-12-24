import "./ExpenseItem.css";

interface ExpenseItemProps {
  title: string;
  date: Date;
  amount: number;
}

export default function ExpenseItem({ title, date, amount }: ExpenseItemProps) {
  return (
    <div className="expense-item">
      <div> {date.toISOString()} </div>
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price"> ${amount} </div>
      </div>
    </div>
  );
}
