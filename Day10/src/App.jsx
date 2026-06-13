import React from "react";
import Navbar from "./Components/Navbar";
import NewsCard from "./Components/NewsCard";
import Footer from "./Components/Footer";


import Button from "./Components/Category";
const App = () => {
  return <>
  <Navbar/>
   <Button className ="py-5" />
   <NewsCard />
   <Footer />
   

    
  </>;
};

export default App;
