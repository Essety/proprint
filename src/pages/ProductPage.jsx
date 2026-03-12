import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {

  const { slug } = useParams();

  return (
    <div style={{padding:"40px"}}>
      <h1>Product Page</h1>
      <h2>{slug}</h2>
      <p>This is dynamic product page.</p>
    </div>
  );

}

export default ProductPage;