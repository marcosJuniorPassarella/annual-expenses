interface ExpenseDateProps {
  date: Date;
}

export default function ExpenseDate({ date }: ExpenseDateProps) {
  const month = date.toLocaleString("pt-br", { month: "long" });
  const day = date.toLocaleString("pt-br", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="">
      <div className="">{month}</div>
      <div className="">{year}</div>
      <div className="">{day}</div>
    </div>
  );
}
