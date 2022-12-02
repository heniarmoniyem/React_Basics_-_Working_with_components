import Expense from "./components/Expenses/Expense";


const App= ()=> {
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
        <h2>Let's get started</h2>
        <Expense items={expenses}/>
      </div>
  );
}

export default App;
