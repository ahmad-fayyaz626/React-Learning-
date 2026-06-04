import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import TotalExpense from "./TotalExpense";
import ExpenseList from "./ExpenseList";

const App = () => {
  const [expense, setExpense] = useState([]);
  const addExpense = (expense) => {
    setExpense((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <TotalExpense expenseList={expense} />
      <ExpenseForm onaddExpense={addExpense} />
      <ExpenseList expenses={expense} />
    </div>
  );
};

export default App;
