import React from "react";
import { Link } from "react-router-dom";
import { letterheads } from "../data/letterheads";

function Letterheads(){

return(

<div style={{padding:"60px 80px"}}>

<h2 style={{fontSize:"36px",marginBottom:"30px"}}>
Letterhead Printing
</h2>

<div className="product-grid">

{letterheads.map((item)=>(

<Link key={item.slug} to={`/stationery/letterheads/${item.slug}`} style={{textDecoration:"none"}}>

{/* <div className="stationery-card"> */}

<div className="stationery-card">

<img
src={item.image}
className="card-image"
/>

<h3 className="card-title">
{item.title}
</h3>

</div>

</Link>

))}

</div>

</div>

)

}

export default Letterheads;