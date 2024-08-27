import React from "react";

function Product({ name, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}

export default Product;
