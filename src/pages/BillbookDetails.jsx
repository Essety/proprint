import React from "react";
import { useParams } from "react-router-dom";
import billbooks  from "../data/billbooks";

function BillbookDetails(){

const { slug } = useParams();

const product = billbooks.find((p)=>p.slug === slug);

if(!product){
return <h2 style={{padding:"80px"}}>Letterhead not found</h2>;
}

return(
<div style={{padding:"60px 80px",display:"flex",gap:"60px"}}>

<div style={{flex:1}}>
<img src={product.image} alt={product.title} style={{width:"100%"}} />
</div>

<div style={{flex:1}}>

<h1>{product.title}</h1>

<h2>₹{product.price} / sheet</h2>

<ul>
{product.features.map((f,i)=>(
<li key={i}>{f}</li>
))}
</ul>

{product.options.map((option,i)=>(
<div key={i} style={{marginTop:"20px"}}>

<label>{option.label}</label>

<select style={{width:"100%",padding:"10px"}}>
{option.values.map((v,j)=>(
<option key={j}>{v}</option>
))}
</select>

</div>
))}

<h3 style={{marginTop:"20px"}}>Upload Design</h3>

<input type="file"/>

<button style={{
marginTop:"20px",
background:"#e31b23",
color:"#fff",
padding:"15px",
border:"none",
width:"100%"
}}>
Add to cart
</button>

</div>

</div>
)

}

export default BillbookDetails;