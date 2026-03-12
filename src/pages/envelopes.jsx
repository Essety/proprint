import React from "react";
import { Link } from "react-router-dom";
import envelopes from "../data/envelopes";

function Envelopes(){

return(

<div style={{padding:"60px 80px"}}>

<h2 style={{fontSize:"36px",marginBottom:"30px"}}>
Envelopes
</h2>

<div className="product-grid">

{envelopes.map((item)=>(

<Link key={item.slug} to={`/stationery/envelopes/${item.slug}`} style={{textDecoration:"none"}}>

{/* <div className="stationery-card"> */}

<div className="stationery-card">

<img
src={item.image} alt={item.name}
style={{width:"100%",height:"220px",objectFit:"cover"}}
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

export default Envelopes;