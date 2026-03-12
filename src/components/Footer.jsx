import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

function Footer(){

const linkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "12px",
  textDecoration: "none",
  color: "#555",
  fontSize: "16px",
  fontWeight: "500"
};

const arrowStyle = {
  color: "#e60023",
  fontSize: "18px",
  fontWeight: "bold"
};

return(

<div style={{background:"#f8f8f8",padding:"70px 80px"}}>

{/* GRID */}

<div
style={{
display:"grid",
gridTemplateColumns:"2fr 1fr 1fr 1fr",
gap:"60px"
}}
>

{/* COMPANY INFO */}

<div>

<h2 style={{fontSize:"20px",marginBottom:"20px"}}>
Proprints offers personalized, high-quality printed items to help
you effectively communicate your message to a wider audience
</h2>

<p style={{marginBottom:"10px"}}>
<FiMail style={{marginRight:"8px"}}/>
proprints@yahoo.com
</p>

<p style={{marginBottom:"10px"}}>
<FiPhone style={{marginRight:"8px"}}/>
+91 91171 77979
</p>

<p style={{marginBottom:"20px"}}>
<FiMapPin style={{marginRight:"8px"}}/>
249/2, Ground Floor, Rama Market, Munirka, New Delhi - 110067
</p>

{/* GOOGLE MAP */}

<iframe
title="map"
src="https://maps.google.com/maps?q=17.4395995,78.3954431&z=15&output=embed"
style={{
width:"100%",
height:"200px",
border:"0",
borderRadius:"6px"
}}
/>

</div>

{/* OUR COMPANY */}

<div>

<h3 style={{marginBottom:"20px"}}>Our Company</h3>

<Link to="/about" style={linkStyle}>
<span style={arrowStyle}>»</span> About Us
</Link>

<Link to="/blog" style={linkStyle}>
<span style={arrowStyle}>»</span> Our Blog
</Link>

</div>

{/* SUPPORT */}

<div>

<h3 style={{marginBottom:"20px"}}>Support</h3>

<Link to="/account" style={linkStyle}>
<span style={arrowStyle}>»</span> My Account
</Link>

<Link to="/help" style={linkStyle}>
<span style={arrowStyle}>»</span> Help Centre
</Link>

<Link to="/faq" style={linkStyle}>
<span style={arrowStyle}>»</span> FAQs
</Link>

</div>

{/* POLICIES */}

<div>

<h3 style={{marginBottom:"20px"}}>Our Policies</h3>

<Link to="/terms" style={linkStyle}>
<span style={arrowStyle}>»</span> Terms & Condition
</Link>

<Link to="/privacy" style={linkStyle}>
<span style={arrowStyle}>»</span> Privacy Policy
</Link>

<Link to="/refund" style={linkStyle}>
<span style={arrowStyle}>»</span> Refund & Return Policy
</Link>

</div>

</div>

<div
style={{
marginTop:"50px",
borderTop:"1px solid #ddd",
paddingTop:"20px",
textAlign:"center",
color:"#777",
fontSize:"16px"
}}
>

© 2025-26 Proprints

</div>

</div>

)

}

export default Footer;