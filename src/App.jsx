import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Categories />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog" element={<Contact />} />
    </Routes>
  );
}

export default App;
