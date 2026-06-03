import { useState } from "react";
const TotalExpense = ({ expenseList }) => {
  

  const Total = expenseList.reduce((sum, expense) => {
    return sum + expense.ammount;
  },0);
  
  return (
    <div>
      <h3>Total: {Total}</h3>
    </div>
  );
};

export default TotalExpense;
