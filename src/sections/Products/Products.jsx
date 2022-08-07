import React from "react";
import "./styles.scss";
import rolex from "../../assets/images/IMG_5628 1.png";

import { data } from "./data";
import Product from "./Product";
export default function Products() {
  return (
    <>
<Recommendation/>
    
    <div className="products__container">
      {data.map((el) => (
        <Product
          key={el.id}
          title={el.name}
          price={el.price}
          image={el.image}
          location={el.location}
          subtitle={el.subtitle}
        />
      ))}
    </div>
    </>
  );
}


function Recommendation(){
    return <div className="recommendation">
        <h1>You May Also Like</h1>
    </div>
}