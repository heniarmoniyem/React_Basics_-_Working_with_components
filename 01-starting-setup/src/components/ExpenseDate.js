import "./ExpenseDate.css"


function ExpenseDate(data){
    const month = data.date.toLocaleString('en-us', {month: 'long'});
    const year = data.date.getFullYear();
    const day= data.date.toLocaleString('en-us', {day: '2-digit'});

    return (
        <div className="expense-date">
        <div className= "expense-date_month ">{month}</div>
        <div className= "expense-date_year">{year}</div>
        <div className="expense-date_day">{day}</div>
      </div>
    );

}

export default ExpenseDate;