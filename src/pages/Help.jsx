import React from "react";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";

function Help(){

return(

<div style={{padding:"100px 80px"}}>

<h1 style={{textAlign:"center",marginBottom:"60px"}}>
Help Centre
</h1>

<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr 1fr",
gap:"60px",
textAlign:"center"
}}
>

{/* ADDRESS */}

<div>

<FiMapPin size={40} color="#e88a7c"/>

<h3 style={{marginTop:"20px"}}>Address</h3>

<p style={{color:"#777",marginTop:"15px"}}>
249/B, Ground Floor,
<br/>
Rama Market, Munirka
<br/>
New Delhi - 110067
</p>

</div>


{/* CONTACT */}

<div>

<FiPhone size={40} color="#e88a7c"/>

<h3 style={{marginTop:"20px"}}>Contact</h3>

<p style={{color:"#777",marginTop:"15px"}}>
Mobile: +91 9211253015
<br/>
Landline: 011 46091624
<br/>
E-mail: suresh_shivanient@yahoo.com
</p>

</div>


{/* HOURS */}

<div>

<FiClock size={40} color="#e88a7c"/>

<h3 style={{marginTop:"20px"}}>Hour of operation</h3>

<p style={{color:"#777",marginTop:"15px"}}>
24x7 hr
</p>

</div>

</div>

</div>

)

}

export default Help;