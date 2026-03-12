import React from "react";
import { Link } from "react-router-dom";

const stamps = [

{
name:"Self-Inking Stamps",
image:"/images/stamps/self-ink.png",
slug:"self-ink-stamp"
},

{
name:"Pre-Ink Stamp",
image:"/images/stamps/pre-ink.png",
slug:"pre-ink-stamp"
},

{
name:"Polymer Rubber Stamp",
image:"/images/stamps/polymer.png",
slug:"polymer-stamp"
},

{
name:"Signature Stamp",
image:"/images/stamps/signature.png",
slug:"signature-stamp"
},

{
name:"Pocket Stamp",
image:"/images/stamps/pocket.png",
slug:"pocket-stamp"
},

{
name:"Embossing Stamp",
image:"/images/stamps/emboss.png",
slug:"emboss-stamp"
},

{
name:"Pen Stamp",
image:"/images/stamps/pen.png",
slug:"pen-stamp"
},

{
name:"Date/Number Stamp",
image:"/images/stamps/date.png",
slug:"date-stamp"
},

{
name:"Fabric Stamp",
image:"/images/stamps/fabric.png",
slug:"fabric-stamp"
}

];

function Stamps(){

return(

<div>

{/* HERO */}

<div
style={{
width:"100%",
marginTop:"20px"
}}
>

<img
src="/images/stamps/hero.png"
alt="Custom Stamp & Ink"
style={{
width:"100%",
height:"auto",
display:"block"
}}
/>

</div>


{/* TITLE */}

<div style={{padding:"60px 80px"}}>

<h2 style={{fontSize:"40px",textAlign:"center"}}>

Custom Rubber Stamps in New Delhi

</h2>

<p style={{textAlign:"center",marginTop:"10px"}}>

Custom stamp printing provides personalized and efficient solutions for document marking.

</p>

</div>

{/* STAMP GRID */}

<div style={{
padding:"0 80px 60px 80px",
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"30px"
}}>

{stamps.map((item)=>(

<Link
key={item.slug}
to={`/stamps/${item.slug}`}
style={{textDecoration:"none",color:"#333"}}
>

<div className="stationery-card">

<img
src={item.image}
style={{width:"100%",borderRadius:"10px"}}
/>

<h3 style={{marginTop:"10px"}}>
{item.name}
</h3>

</div>

</Link>

))}

</div>

{/* SEO CONTENT */}

<div style={{padding:"60px 80px",maxWidth:"1000px"}}>

<h2>Customized Rubber Stamp Maker in Delhi</h2>

<p>

Rubber stamps are used for multiple purposes such as making crisp and clear replication copies,
avoiding manual writing errors, making uniform copies, and improving business operations.

</p>

<h3>Types of Rubber Stamps</h3>

<ul>

<li>Pre-Ink Stamp</li>
<li>Self Ink Stamp</li>
<li>Polymer Rubber Stamp</li>
<li>Date Stamp</li>
<li>Numbering Stamp</li>

</ul>

<h3>Rubber Stamp Best Uses</h3>

<p>

Rubber stamps are used for official document authentication, company registration,
branding, packaging, and craft making.

</p>

</div>

{/* FAQ */}

<div style={{padding:"60px 80px"}}>

<h2>Frequently Asked Questions</h2>

<ul style={{marginTop:"20px"}}>

<li>Are customizable stamp options available?</li>
<li>What information can be included in a custom stamp?</li>
<li>How do I create a custom stamp?</li>
<li>Can I include logos in my stamp?</li>
<li>What are the size and shape options?</li>

</ul>

</div>

</div>

)

}

export default Stamps;