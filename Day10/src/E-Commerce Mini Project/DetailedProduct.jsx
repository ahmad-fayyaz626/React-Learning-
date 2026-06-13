import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import { FiTag } from "react-icons/fi"; 
import { FaStar } from "react-icons/fa";
const DetailedProduct = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`,
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  // Now we wil show that data in the UI
  if (loading) {
    return <Loader ClassName="w-full h-full" />;
  }
  if (data) {
    return (
      <div className="min-h-screen bg-slate-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Product Image Section */}
              <div className=" max-w-md mx-auto bg-gradient-to-br from-slate-50 to-white p-6 md:p-10 flex items-center justify-center">
                <div className="w-64 h-64 aspect-square bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center p-8">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Product Information */}
              <div className="p-6 md:p-10 flex flex-col">
                {/* Category */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 text-sm font-medium bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full">
                    <FiTag size={14} />
                    {data.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {data.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-2 rounded-xl">
                    <FaStar size={16} />
                    <span className="font-semibold">{data.rating.rate}</span>
                  </div>

                  <span className="text-slate-500 text-sm">
                    {data.rating.count} verified reviews
                  </span>
                </div>

                {/* Price */}
                <div className="mt-8">
                  <p className="text-4xl md:text-5xl font-bold text-slate-900">
                    ${data.price.toFixed(2)}
                  </p>
                  <p className="text-slate-500 mt-2">Inclusive of all taxes</p>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-slate-200" />

                {/* Description */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Product Description
                  </h2>

                  <p className="text-slate-600 leading-8">{data.description}</p>
                </div>

                {/* Bottom Action Area */}
                <div className="mt-auto pt-10">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-all duration-300">
                      Add to Cart
                    </button>

                    <button className="flex-1 border border-slate-300 py-4 rounded-2xl font-semibold text-slate-700 hover:bg-slate-100 transition-all duration-300">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailedProduct;
