import React from "react";
import { Link } from "react-router-dom";
import envelopes from "../data/envelopes";

function Envelopes(){

return(

<div style={{padding:"60px 80px"}}>

<h2 style={{fontSize:"36px",marginBottom:"30px"}}>
Envelopes
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"30px"
}}>

{envelopes.map((item)=>(

<Link key={item.slug} to={`/stationery/envelopes/${item.slug}`} style={{textDecoration:"none"}}>

{/* <div style={{
background:"#f6f6f6",
borderRadius:"8px",
overflow:"hidden",
cursor:"pointer"
}}> */}

<div className="stationery-card">

<img
src={item.image} alt={item.name}
style={{width:"100%",height:"220px",objectFit:"cover"}}
/>

<h3 style={{padding:"15px"}}>
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