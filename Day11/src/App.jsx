import React from "react";
import api from "./Axios/api";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import addProducts from "./Actions/AddProducts";
import Cart from "./Pages/Cart";

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cart);
  console.log(data);
  

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get("/products");
      dispatch(addProducts(response.data));
    };
    fetchProducts();
  },[]);
  return <>
  <Navbar />


  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
     {
      data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))  
     }

  </div>

  <Cart />

  </>




};

export default App;
