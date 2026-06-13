import { useNews } from "../Context/context";
import Wrapper from "./Wrapper";
import { useEffect } from "react";
const Card = ({ details }) => {
  console.log(details);
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={details.urlToImage}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title line-clamp-2">{details.title}</h2>
        <p className="line-clamp-3 text-ellipsis overflow-hidden font-light text-sm">
          {details.description}
        </p>
        <div className="card-actions">
          <button onClick={() => window.open(details.url, "_blank")} className="btn badge-outline">See More</button>
        </div>
      </div>
    </div>
  );
};

const NewsCard = () => {
  const { news, setNews, fetchData } = useNews();
  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setNews(data.articles);
    })();
  }, []);
  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {news.map ((newsDetails)=>{
          return <Card key={newsDetails.url} details={newsDetails} />
        })}
        
      </div>
    </Wrapper>
  );
};
export default NewsCard;
