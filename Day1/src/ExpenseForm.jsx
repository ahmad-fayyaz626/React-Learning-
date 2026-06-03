import { useState } from "react";
import ExpenseList from "./ExpenseList";

const ExpenseForm = ({ onaddExpense }) => {
  const [items, setItems] = useState("");
  const [ammount, setAmmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      items,
      ammount:Number(ammount)
    };
    onaddExpense(newExpense);
    
    setItems("");
    setAmmount(0);
  };
  return (
    <form onSubmit = {handleSubmit}style={{ display: "flex", flexDirection: "column" }}>
      <input
        type="text"
        placeholder="Enter item"
        onChange={(e) => setItems(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter ammount"
        onChange={(e) => setAmmount(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default ExpenseForm;
