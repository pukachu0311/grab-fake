import React from "react";
import Navbar from "./Header";
import Info from "./Information";
import SearchBox from "./SearchBox";
import Promo2 from "./Promo2";
import "./Design.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <SearchBox />
      <Promo2 />
      <Info />
      <Footer />
    </main>
  );
};
export default Home;
