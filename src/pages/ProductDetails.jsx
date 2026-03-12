// import React from "react";
// import { useParams } from "react-router-dom";

// function ProductDetails() {

//   const { slug } = useParams();

//   return (

//     <div className="product-container">

//       <div className="product-left">

//         <img
//           src={`/images/cards/${slug}.png`}
//           alt={slug}
//         />

//       </div>

//       <div className="product-right">

//         <h1>{slug.replaceAll("-", " ")}</h1>

//         <h2>₹349.00</h2>

//         <ul>

//           <li>Standard Visiting Card Size: 88mm x 54mm</li>
//           <li>Paper Stock: Premium 350 GSM</li>
//           <li>Print Quality: HD quality printing</li>
//           <li>Printing Options: Single / Double side</li>
//           <li>Packaging: 100 cards per box</li>

//         </ul>

//       </div>

//     </div>

//   );
// }

// export default ProductDetails;

// import React from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../data/products";

// function ProductDetails() {

//   const { slug } = useParams();

//   const product = products.find((p) => p.slug === slug);

//   if (!product) {
//     return <h2>Product not found</h2>;
//   }

//   return (

//     <div className="product-container">

//       <div className="product-left">

//         <img
//           src={product.image}
//           alt={product.title}
//         />

//       </div>

//       <div className="product-right">

//         <h1>{product.title}</h1>

//         <h2>₹{product.price}.00</h2>

//         <ul>

//           {product.features.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}

//         </ul>

//       </div>

//     </div>

//   );
// }

// export default ProductDetails;

// import React from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../data/products";

// function ProductDetails() {

//   const { slug } = useParams();

//   const product = products.find((p) => p.slug === slug);

//   if (!product) {
//     return <h2 style={{padding:"80px"}}>Product not found</h2>;
//   }

//   return (

//     <div>

//       {/* PRODUCT SECTION */}

//       <div
//         style={{
//           display:"flex",
//           gap:"60px",
//           padding:"60px 80px",
//           alignItems:"flex-start"
//         }}
//       >

//         {/* LEFT IMAGE */}

//         <div style={{flex:1}}>

//           <img
//             src={product.image}
//             alt={product.title}
//             style={{
//               width:"100%",
//               borderRadius:"8px"
//             }}
//           />

//         </div>


//         {/* RIGHT DETAILS */}

//         <div style={{flex:1}}>

//           <h1 style={{fontSize:"40px"}}>
//             {product.title}
//           </h1>

//           <h2 style={{marginTop:"10px"}}>
//             ₹{product.price}.00
//           </h2>


//           {/* FEATURES */}

//           <ul style={{marginTop:"20px",lineHeight:"1.8"}}>

//             {product.features.map((item, index) => (

//               <li key={index}>
//                 {item}
//               </li>

//             ))}

//           </ul>

//         </div>

//       </div>


//       {/* DESCRIPTION SECTION */}

//       {product.description && (

//         <div
//           style={{
//             padding:"60px 80px",
//             maxWidth:"1000px"
//           }}
//         >

//           <h2
//             style={{
//               fontSize:"28px",
//               marginBottom:"20px"
//             }}
//           >
//             Description
//           </h2>

//           <p
//             style={{
//               lineHeight:"1.8",
//               color:"#555",
//               whiteSpace:"pre-line"
//             }}
//           >
//             {product.description}
//           </p>

//         </div>

//       )}

//     </div>

//   );

// }

// export default ProductDetails;

// import React from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../data/products";

// function ProductDetails() {

//   const { slug } = useParams();

//   const product = products.find((p) => p.slug === slug);

//   if (!product) {
//     return <h2 style={{ padding: "80px" }}>Product not found</h2>;
//   }

//   return (
//     <div>

//       <div
//         style={{
//           display: "flex",
//           gap: "60px",
//           padding: "60px 80px",
//           alignItems: "flex-start"
//         }}
//       >

//         <div style={{ flex: 1 }}>
//           <img
//             src={product.image}
//             alt={product.title}
//             style={{ width: "100%", borderRadius: "8px" }}
//           />
//         </div>

//         <div style={{ flex: 1 }}>

//           <h1 style={{ fontSize: "40px" }}>{product.title}</h1>

//           <h2 style={{ marginTop: "10px" }}>
//             ₹{product.price}.00
//           </h2>

//           <p style={{ marginTop: "10px", color: "#666" }}>
//             Show your appreciation and gratitude with a special message!
//           </p>

//           <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
//             {product.features.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>

//           <p style={{ marginTop: "20px", fontWeight: "600" }}>
//             If you order before 7 pm, you can get them on the same day!
//           </p>

//           <h3 style={{ marginTop: "40px" }}>Upload File</h3>

//           <div
//             style={{
//               border: "2px dashed #ccc",
//               padding: "30px",
//               borderRadius: "10px",
//               marginTop: "10px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center"
//             }}
//           >
//             <span>Drag & Drop Files Here</span>

//             <button
//               style={{
//                 background: "#000",
//                 color: "#fff",
//                 padding: "10px 20px",
//                 border: "none",
//                 borderRadius: "5px"
//               }}
//             >
//               Browse Files
//             </button>
//           </div>

//           <h4 style={{ marginTop: "30px" }}>THANK YOU CARD TYPE:</h4>

//           <div style={{ display: "flex", gap: "40px", marginTop: "15px" }}>
//             <label>
//               <input type="radio" name="cardType" defaultChecked /> Flat Cards
//             </label>

//             <label>
//               <input type="radio" name="cardType" /> Folded Cards
//             </label>
//           </div>

//           <div style={{ marginTop: "30px" }}>
//             <label>Size:</label>

//             <select
//               style={{
//                 width: "100%",
//                 padding: "12px",
//                 marginTop: "5px",
//                 borderRadius: "6px"
//               }}
//             >
//               <option>6"x8"</option>
//             </select>
//           </div>

//           <div style={{ marginTop: "20px" }}>
//             <label>PAPER STOCK:</label>

//             <div style={{ marginTop: "10px" }}>
//               <input type="radio" defaultChecked /> 300 gsm Art Card
//             </div>
//           </div>

//           <div style={{ marginTop: "20px" }}>
//             <label>Printed Side:</label>

//             <select
//               style={{
//                 width: "100%",
//                 padding: "12px",
//                 marginTop: "5px",
//                 borderRadius: "6px"
//               }}
//             >
//               <option>Single Side</option>
//             </select>
//           </div>

//           <div style={{ marginTop: "20px" }}>
//             <label>Finishing</label>

//             <select
//               style={{
//                 width: "100%",
//                 padding: "12px",
//                 marginTop: "5px",
//                 borderRadius: "6px"
//               }}
//             >
//               <option>Matt Finish</option>
//             </select>
//           </div>

//           <div
//             style={{
//               marginTop: "40px",
//               display: "flex",
//               justifyContent: "space-between"
//             }}
//           >
//             <h3>Total</h3>
//             <h3>₹{product.price}.00</h3>
//           </div>

//           <button
//             style={{
//               marginTop: "20px",
//               width: "100%",
//               background: "#e31b23",
//               color: "#fff",
//               padding: "15px",
//               border: "none",
//               borderRadius: "6px",
//               fontSize: "18px"
//             }}
//           >
//             Add to cart
//           </button>

//         </div>
//       </div>

//       {product.description && (
//         <div
//           style={{
//             padding: "60px 80px",
//             maxWidth: "1000px"
//           }}
//         >
//           <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
//             Description
//           </h2>

//           <p
//             style={{
//               lineHeight: "1.8",
//               color: "#555",
//               whiteSpace: "pre-line"
//             }}
//           >
//             {product.description}
//           </p>
//         </div>
//       )}

//     </div>
//   );
// }

// export default ProductDetails;


import React from "react";
import { useParams } from "react-router-dom";
import { businessCards } from "../data/businessCards";

function ProductDetails() {

  const { slug } = useParams();

  const product = businessCards.find((p) => p.slug === slug);

  if (!product) {
    return <h2 style={{ padding: "80px" }}>Product not found</h2>;
  }

  return (
    <div>

      {/* <div
        style={{
          display: "flex",
          gap: "60px",
          padding: "60px 80px",
          alignItems: "flex-start"
        }}
      > */}
      <div className="container product-layout">

        {/* LEFT IMAGE */}

        <div style={{ flex: 1 }}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        {/* RIGHT DETAILS */}

        <div style={{ flex: 1 }}>

          <h1 style={{ fontSize: "40px" }}>{product.title}</h1>

          <h2 style={{ marginTop: "10px" }}>
            ₹{product.price}.00
          </h2>

          <p style={{ marginTop: "10px", color: "#666" }}>
            Professional visiting card printing service.
          </p>

          {/* FEATURES */}

          <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
            {product.features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p style={{ marginTop: "20px", fontWeight: "600" }}>
            If you order before 7 pm, you can get them on the same day!
          </p>


          {/* UPLOAD FILE */}

          <h3 style={{ marginTop: "40px" }}>Upload File</h3>

          <div
            style={{
              border: "2px dashed #ccc",
              padding: "30px",
              borderRadius: "10px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span>Drag & Drop Files Here</span>

            <button
              style={{
                background: "#000",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px"
              }}
            >
              Browse Files
            </button>
          </div>


          {/* DYNAMIC OPTIONS */}

          {product.options && product.options.map((option,index)=>(

          <div key={index} style={{ marginTop: "20px" }}>

            <label>{option.label}</label>

            <select
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "5px",
                borderRadius: "6px"
              }}
            >

            {option.values.map((value,i)=>(
              <option key={i}>{value}</option>
            ))}

            </select>

          </div>

          ))}


          {/* QUANTITY */}

          <div style={{ marginTop: "20px" }}>

            <label>Quantity</label>

            <input
              type="number"
              placeholder="Enter quantity"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "5px",
                borderRadius: "6px",
                border: "1px solid #ccc"
              }}
            />

          </div>


          {/* TOTAL */}

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <h3>Total</h3>
            <h3>₹{product.price}.00</h3>
          </div>


          {/* ADD TO CART */}

          <button
            style={{
              marginTop: "20px",
              width: "100%",
              background: "#e31b23",
              color: "#fff",
              padding: "15px",
              border: "none",
              borderRadius: "6px",
              fontSize: "18px"
            }}
          >
            Add to cart
          </button>

        </div>
      </div>


      {/* DESCRIPTION */}

      {product.description && (

        <div
          style={{
            padding: "60px 80px",
            maxWidth: "1000px"
          }}
        >
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            Description
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              color: "#555",
              whiteSpace: "pre-line"
            }}
          >
            {product.description}
          </p>

        </div>

      )}

    </div>
  );
}

export default ProductDetails;