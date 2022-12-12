import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">Amount</div>
      </div>
    </div>
  );
}
