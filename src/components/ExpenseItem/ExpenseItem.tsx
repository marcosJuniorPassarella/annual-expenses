import "./ExpenseItem.css";

interface ExpenseItemProps {
  title: string;
  date: Date;
  amount: number;
}

export default function ExpenseItem({ title, date, amount }: ExpenseItemProps) {
  const month = date.toLocaleString("pt-br", { month: "long" });
  const day = date.toLocaleString("pt-br", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-item">
      <div className="">
        <div className="">{month}</div>
        <div className="">{year}</div>
        <div className="">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> ${amount} </div>
      </div>
    </div>
  );
}
