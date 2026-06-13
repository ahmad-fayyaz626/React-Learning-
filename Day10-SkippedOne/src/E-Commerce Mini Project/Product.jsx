import { useState, useEffect } from "react";
import Loader from "./Loader";
import {useNavigate} from "react-router-dom";
// dummy Product Page
const Product = () => {

    const navigate = useNavigate();
    
  const API = "https://fakestoreapi.com/products";
  const [Products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Card Section

  if (loading) {
    return <Loader ClassName="w-full h-full" />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {Products.map((product) => {
        return (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <div onClick={() => navigate(`/Product/${product.id}`)} className="overflow-hidden h-48 w-full mb-4">
              <img
                className="aspect-square object-contain p-2 w-full h-full hover:scale-105 transition-transform duration-300 transform-gpu transition-transform duration-300"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="text-center">
              <p className="text-white-600 bg-green-600 px-2 py-1 rounded-md">
                {product.rating.rate} ({product.rating.count} reviews)
              </p>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            </div>

            <div className="text-center">
              <h3 className="text-sm font-bold mb-2 line-clamp-2">
                {product.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
