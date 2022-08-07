import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./sections/Nav/Nav";
import Details from "./sections/Details/Details";
import CategoriesNav from "./sections/Categories-nav/CategoriesNav";
import Products from "./sections/Products/Products";
import Footer from "./sections/Footer/Footer";
import Model from "./sections/Model/Model";
import AccordionSection from "./sections/Model/AccordionSection";

import Homepage from "./pages/Homepage";
function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
