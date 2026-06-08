const Input = ({ value, onChange, label, id, type = "text" }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-center gap-1 items-center">
        <label htmlFor={id} className="mb-2 font-semibold">
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className="w-64 p-2 border rounded"
          required
        />
      </div>
    </div>
  );
};
export default Input;
