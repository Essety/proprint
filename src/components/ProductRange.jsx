import React from "react";
import { FiCheck } from "react-icons/fi";

function ProductRange(){

return(

<div style={{
padding:"100px 80px",
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"60px",
alignItems:"center"
}}>

{/* LEFT IMAGES */}

<div style={{position:"relative"}}>

<img
src="/images/design-work.png"
alt="design"
style={{
width:"65%",
borderRadius:"10px"
}}
/>

{/* <img
src="/images/design-books.png"
alt="design"
style={{
width:"35%",
position:"absolute",
bottom:"-10px",
left:"-60px",
borderRadius:"10px"
}}
/> */}

</div>


{/* RIGHT CONTENT */}

<div>

<p style={{
color:"#e60023",
letterSpacing:"3px",
fontWeight:"600"
}}>
FAST AND QUALITY SERVICE
</p>

<h2 style={{
fontSize:"42px",
margin:"20px 0"
}}>
Wide range of customized printing products
</h2>

<p style={{color:"#777",marginBottom:"30px"}}>
You can shop more than 200 custom printed products online from custom design, print and doorstep delivery.
</p>


<div style={{display:"grid",gap:"18px"}}>

<div><FiCheck color="#21b59b"/> Custom Apparel Printing</div>
<div><FiCheck color="#21b59b"/> Customized Gift Item (Drinkware, Awards)</div>
<div><FiCheck color="#21b59b"/> Coffee Mug, Magic Mug, Insulated Bottle</div>
<div><FiCheck color="#21b59b"/> Box and Packaging</div>
<div><FiCheck color="#21b59b"/> Boards and Sign Materials</div>
<div><FiCheck color="#21b59b"/> Business Promotional Materials</div>

</div>

</div>

</div>

)

}

export default ProductRange