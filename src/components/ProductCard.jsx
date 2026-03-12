// import React from "react";

// function ProductCard({product}) {

//   return (
//     <div style={{
//       width:"250px",
//       border:"1px solid #ddd",
//       padding:"10px",
//       textAlign:"center"
//     }}>

//       <img src={product.image} alt="" width="100%" />

//       <h3>{product.title}</h3>

//     </div>
//   );
// }

// export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return (

    <Link to={product.route} style={{textDecoration:"none", color:"black"}}>

      <div style={{
        width:"250px",
        border:"1px solid #ddd",
        padding:"10px",
        textAlign:"center",
        cursor:"pointer"
      }}>

        <img src={product.image} alt={product.title} width="100%" />

        <h3>{product.title}</h3>

      </div>

    </Link>

  );

}

export default ProductCard;