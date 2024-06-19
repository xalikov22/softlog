import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Category from "../components/Category";
import Feature from "../components/Feature";
import End from "../components/End";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <Category />
        <Feature />
        <End />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
