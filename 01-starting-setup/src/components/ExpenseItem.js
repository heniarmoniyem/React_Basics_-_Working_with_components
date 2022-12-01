import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(data) {
   
  return (
    <div className="expense-item">
        <ExpenseDate date={data.date} />


      <div className="expense-item_description">
        <h2>{data.title}</h2>
        <div className="expense-item_price">${data.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
