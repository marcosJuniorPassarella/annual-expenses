import "./ExpenseDate.css";

interface ExpenseDateProps {
  date: Date;
}

export default function ExpenseDate({ date }: ExpenseDateProps) {
  const month = date.toLocaleString("pt-br", { month: "long" });
  const day = date.toLocaleString("pt-br", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
