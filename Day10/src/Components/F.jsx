import { useMyContext } from "./MyContext";
const F = () => {
  const { count, setCount } = useMyContext();
  return (
    <div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <h1 className=" bg-yellow-500 text-3xl font-bold text-center mt-10">
        This is Component F
      </h1>
    </div>
  );
};

export default F;
