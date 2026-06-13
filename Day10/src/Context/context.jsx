import { createContext, useContext } from "react";
import api from "../config/api";
import { useEffect } from "react";
import { useState } from "react";

const NewsContext = createContext();
const fetchData = async (url = "/everything?q=in") => {
  const response = await api.get(
    `${url}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
  );
  return response.data;
};

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const value = {
    news,
    setNews,
    fetchData,
  };

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNews = () => useContext(NewsContext);

export { NewsProvider, useNews };
