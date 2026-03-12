import React from "react";
import { useParams } from "react-router-dom";
import { stamps } from "../data/stamps";

function StampDetails(){

const { slug } = useParams();

const product = stamps.find((p)=>p.slug === slug);

if(!product){
return <h2 style={{padding:"80px"}}>Stamp not found</h2>;
}

return(

<div style={{padding:"60px 80px",display:"flex",gap:"60px"}}>

<div style={{flex:1}}>

<img
src={product.image}
style={{width:"100%",borderRadius:"8px"}}
/>

</div>

<div style={{flex:1}}>

<h1>{product.title}</h1>

<h2>₹{product.price}.00</h2>

<ul style={{marginTop:"20px"}}>
{product.features.map((item,index)=>(
<li key={index}>{item}</li>
))}
</ul>

<h3 style={{marginTop:"30px"}}>Upload File</h3>

<div style={{
border:"2px dashed #ccc",
padding:"30px",
borderRadius:"10px"
}}>
Drag & Drop Files Here
</div>

<button style={{
marginTop:"20px",
width:"100%",
background:"#e31b23",
color:"#fff",
padding:"15px",
border:"none",
borderRadius:"6px"
}}>
Add to cart
</button>

</div>

</div>

)

}

export default StampDetails;