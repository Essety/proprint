import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

function CategoryPage(){

const { category } = useParams();

const filteredProducts = products.filter(
(p)=>p.category === category
);

return(

<div style={{padding:"60px 80px"}}>

<h2 style={{marginBottom:"30px"}}>

{category
  .replaceAll("-", " ")
  .replace(/\b\w/g, l => l.toUpperCase())}

</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"30px"
}}
>

{filteredProducts.map((item)=>(

<Link key={item.slug} to={`/products/${item.slug}`}>

<div>

<img
src={item.image}
style={{width:"100%"}}
/>

<h3>{item.title}</h3>

</div>

</Link>

))}

</div>

</div>

)

}

export default CategoryPage;