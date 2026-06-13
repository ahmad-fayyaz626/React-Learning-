import Wrapper from "./Wrapper";
import api from "../config/api";
import { useNews } from "../Context/context";

const Button = ({ className }) => {
  const { setNews, fetchData } = useNews();

  const handleChange = async ({ cat }) => {
    const response = await fetchData(`/everything?q=${cat}`);
    console.log(response.articles);
    setNews(response.articles);
  };

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <div className="sticky top-16 z-20 bg-base-100">
      <Wrapper>
        <div
          className={`py-8 flex flex-wrap justify-center overflow-x-auto ${className}`}
        >
          {categories.map((cat) => (
            <button
              onClick={handleChange}
              value={cat}
              key={cat}
              className="btn btn-primary m-2"
            >
              {cat}
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
export default Button;
