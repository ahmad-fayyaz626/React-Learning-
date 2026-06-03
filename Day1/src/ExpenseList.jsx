const ExpenseList = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.items} - ${expense.ammount}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
