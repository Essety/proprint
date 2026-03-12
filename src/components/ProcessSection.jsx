// import React, { useState } from "react";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// function ProcessSection(){

// const [open,setOpen] = useState(1);

// const toggle = (i)=>{
// setOpen(open === i ? null : i);
// };

// return(

// <div style={{padding:"80px"}}>

// <p style={{color:"#e60023",letterSpacing:"2px"}}>
// FAST AND QUALITY SERVICES
// </p>

// <h2 style={{fontSize:"42px",maxWidth:"600px"}}>
// Let us show you how your products come to life
// </h2>

// <div style={{marginTop:"40px",maxWidth:"700px"}}>

// {/* ITEM 1 */}

// <div
// onClick={()=>toggle(1)}
// style={{
// background: open===1 ? "linear-gradient(90deg,#f28b6d,#e7a57b)" : "#eee",
// padding:"20px",
// borderRadius:"10px",
// marginBottom:"15px",
// cursor:"pointer",
// display:"flex",
// justifyContent:"space-between",
// alignItems:"center",
// fontWeight:"600"
// }}
// >

// Find the perfect product

// {open===1 ? <FiChevronUp/> : <FiChevronDown/>}

// </div>

// {open===1 && (
// <p style={{color:"#777",marginBottom:"20px"}}>
// Choose from our wide range of printing products such as business cards,
// banners, posters, stationery items and more. Select the product that best
// fits your requirement.
// </p>
// )}



// {/* ITEM 2 */}

// <div
// onClick={()=>toggle(2)}
// style={{
// background: open===2 ? "linear-gradient(90deg,#f28b6d,#e7a57b)" : "#eee",
// padding:"20px",
// borderRadius:"10px",
// marginBottom:"15px",
// cursor:"pointer",
// display:"flex",
// justifyContent:"space-between",
// alignItems:"center",
// fontWeight:"600"
// }}
// >

// Make it print ready

// {open===2 ? <FiChevronUp/> : <FiChevronDown/>}

// </div>

// {open===2 && (
// <p style={{color:"#777",marginBottom:"20px"}}>
// While purchasing, upload your design or work with our graphic designers.
// We will adjust layout, color and format to make your design completely
// print ready.
// </p>
// )}



// {/* ITEM 3 */}

// <div
// onClick={()=>toggle(3)}
// style={{
// background: open===3 ? "linear-gradient(90deg,#f28b6d,#e7a57b)" : "#eee",
// padding:"20px",
// borderRadius:"10px",
// marginBottom:"15px",
// cursor:"pointer",
// display:"flex",
// justifyContent:"space-between",
// alignItems:"center",
// fontWeight:"600"
// }}
// >

// Ship it for you

// {open===3 ? <FiChevronUp/> : <FiChevronDown/>}

// </div>

// {open===3 && (
// <p style={{color:"#777"}}>
// Once your order is printed and quality checked, we securely pack it and
// ship it directly to your doorstep anywhere across India.
// </p>
// )}

// </div>

// </div>

// )

// }

// export default ProcessSection;

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function ProcessSection(){

const [open,setOpen] = useState(2);

const toggle = (i)=>{
setOpen(open === i ? null : i);
};

return(

<div style={{
padding:"80px",
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"60px",
alignItems:"center"
}}>

{/* LEFT SIDE */}

<div>

<p style={{color:"#e60023",letterSpacing:"2px"}}>
FAST AND QUALITY SERVICES
</p>

<h2 style={{
fontSize:"42px",
maxWidth:"500px",
marginTop:"10px"
}}>
Let us show you how your products come to life
</h2>


<div style={{marginTop:"40px"}}>

{/* ITEM 1 */}

<div
onClick={()=>toggle(1)}
style={{
background: open===1 ? "linear-gradient(90deg,#f28b6d,#e7a57b)" : "#eee",
padding:"20px",
borderRadius:"10px",
marginBottom:"15px",
cursor:"pointer",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
fontWeight:"600"
}}
>

Find the perfect product

{open===1 ? <FiChevronUp/> : <FiChevronDown/>}

</div>

{open===1 && (
<p style={{color:"#777",marginBottom:"20px"}}>
Browse our wide range of custom printing products including business cards,
posters, banners, stationery and more. Choose the product that suits
your requirement perfectly.
</p>
)}


{/* ITEM 2 */}

<div
onClick={()=>toggle(2)}
style={{
background: open===2 ? "linear-gradient(90deg,#f28b6d,#e7a57b)" : "#eee",
padding:"20px",
borderRadius:"10px",
marginBottom:"15px",
cursor:"pointer",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
fontWeight:"600"
}}
>

Make it print ready

{open===2 ? <FiChevronUp/> : <FiChevronDown/>}

</div>

{open===2 && (
<p style={{color:"#777",marginBottom:"20px"}}>
While purchasing upload your design or collaborate with our graphic
design team. We ensure your artwork is perfectly prepared for
high-quality printing.
</p>
)}


{/* ITEM 3 */}

<div
onClick={()=>toggle(3)}
style={{
background: open===3 ? "linear-gradient(90deg,#f28b6d,#e7a57b)" : "#eee",
padding:"20px",
borderRadius:"10px",
marginBottom:"15px",
cursor:"pointer",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
fontWeight:"600"
}}
>

Ship it for you

{open===3 ? <FiChevronUp/> : <FiChevronDown/>}

</div>

{open===3 && (
<p style={{color:"#777"}}>
After printing and quality checking, we securely pack your products
and ship them to your doorstep anywhere across India.
</p>
)}

</div>

</div>


{/* RIGHT SIDE IMAGE */}

<div>

<img
src="/images/printing-machine.png"
alt="printing process"
style={{
width:"100%",
borderRadius:"10px"
}}
/>

</div>


</div>

)

}

export default ProcessSection;