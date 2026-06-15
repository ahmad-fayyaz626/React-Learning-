import Wrapper from "./Wrapper";
import {useSelector} from "react-redux";

const ProductCard = ({ product }) => {
  const products = useSelector((state) => state.cart);
  console.log(products);
  return (
    <Wrapper>
      <div className="card bg-base-100 w-96 shadow-sm  fill-base-content">
        <figure className="px-10 pt-10 h-48 w-full">
          <img
           className="object-contain h-48 w-full"
            src={product.image}
            alt={product.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title line-clamp-1">{product.title}</h2>
          <p className="line-clamp-3 text-ellipsis overflow-hidden font-light text-sm">
            {product.description}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ProductCard;