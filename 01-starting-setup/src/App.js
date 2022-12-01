import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "H1",
      title: "House Insurance",
      amount: 23030.43,
      date: new Date(2022, 12, 1),
    },
    {
      id: "H2",
      title: "Car Insurance",
      amount: 2330.43,
      date: new Date(2022, 12, 2),
    },
    {
      id: "H3",
      title: "Life Insurance",
      amount: 52330.43,
      date: new Date(2022, 12, 3),
    },
    {
      id: "H4",
      title: "Inclusive Insurance",
      amount: 2330.43,
      date: new Date(2022, 12, 4),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
