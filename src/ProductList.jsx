import React from "react";
import Product from "./Product";

function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <Product name="Laptop" price="999" />
      <Product name="Smartphone" price="699" />
      <Product name="Headphones" price="199" />
    </div>
  );
}

export default ProductList;
