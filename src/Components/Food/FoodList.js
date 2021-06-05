import React, { useState } from "react";
import { ProductData } from "../../ProductData";
import FoodCard from "./FoodCard";

const FoodList = (props) => {
  console.log(props);
  const [products, setProducts] = useState(ProductData);
  // console.log(Products);
  const isMatch = products.filter(
    (product) => product.Familly.name === props.match.params.name
  );
  console.log(isMatch);
  return (
    <div class="container">
      <div className="Food-list">
        {isMatch.map((product) => (
          <FoodCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
