import { useMyContext } from "./MyContext";
const E = () => {
  const { count, setCount } = useMyContext();
  console.log(count);
  return (
    <div>
      <h1 className=" bg-yellow-500 text-3xl font-bold text-center mt-10">
        This is Component E
      </h1>
    </div>
  );
};

export default E;
