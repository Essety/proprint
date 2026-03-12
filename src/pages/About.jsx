// import React from "react";

// function About(){

// return(

// <div>

// {/* HERO SECTION */}

// <div
// style={{
// height:"400px",
// backgroundImage:"url('/images/about-banner.png')",
// backgroundSize:"cover",
// backgroundPosition:"center",
// display:"flex",
// alignItems:"center",
// justifyContent:"center"
// }}
// >


// </div>


// {/* WELCOME SECTION */}

// <div style={{padding:"80px 20px",textAlign:"center"}}>

// <p style={{
// color:"#e60023",
// letterSpacing:"3px",
// fontWeight:"600"
// }}>
// WELCOME TO PROPRINT
// </p>

// <h2 style={{
// fontSize:"42px",
// maxWidth:"800px",
// margin:"20px auto"
// }}>
// We are a fast leading e-commerce printing store in India
// </h2>

// <p style={{
// maxWidth:"700px",
// margin:"auto",
// color:"#777",
// lineHeight:"28px"
// }}>
// More than 25 years experience of running print shop and 15 years online print on demand store from traditional to digital printing process. We are dedicated to put your brand name in front of customer in organized way.
// </p>

// </div>


// {/* FEATURES */}

// <div style={{
// padding:"60px 80px",
// display:"grid",
// gridTemplateColumns:"repeat(3,1fr)",
// gap:"40px"
// }}>

// <div>🖨️ Top quality prints using the latest technology</div>
// <div>🎨 Best Designers</div>
// <div>🌍 Shipping Across India</div>
// <div>📦 Made-to-measure packaging</div>
// <div>🔁 Reorder quickly and easily</div>
// <div>🌱 Environmentally friendly production processes</div>

// </div>


// {/* PROCESS SECTION */}

// <div style={{
// padding:"80px",
// display:"grid",
// gridTemplateColumns:"1fr 1fr",
// gap:"50px"
// }}>

// <div>

// <p style={{color:"#e60023",letterSpacing:"2px"}}>
// FAST AND QUALITY SERVICES
// </p>

// <h2 style={{fontSize:"38px"}}>
// Let us show you how your products come to life
// </h2>

// <div style={{marginTop:"30px"}}>

// <div style={{
// background:"#f6b18a",
// padding:"20px",
// borderRadius:"6px",
// marginBottom:"15px"
// }}>
// Find the perfect product
// </div>

// <div style={{
// background:"#eee",
// padding:"20px",
// borderRadius:"6px",
// marginBottom:"15px"
// }}>
// Make it print ready
// </div>

// <div style={{
// background:"#eee",
// padding:"20px",
// borderRadius:"6px"
// }}>
// Ship it for you
// </div>

// </div>

// </div>


// <div>

// <img
// src="/images/printing-machine.PNG"
// alt="printing"
// style={{
// width:"100%",
// borderRadius:"10px"
// }}
// />

// </div>

// </div>


// {/* OUR STORY */}

// <div style={{padding:"80px",maxWidth:"1000px",margin:"auto"}}>

// <h2 style={{textAlign:"center",fontSize:"40px",marginBottom:"40px"}}>
// Our Story
// </h2>

// <p style={{lineHeight:"30px",color:"#666"}}>

// Hi, friends,

// <br/><br/>

// We at Proprints, I (Suresh Kumar) a master of graphic design, printing, and print blogging.

// <br/><br/>

// I run an enterprise in the name of Proprints (An Online Customized Printing Company) for the last 30 years. We believe in using the latest printing technology to produce high-quality, fast printing and cost-effective services.

// <br/><br/>

// We executed every job meticulously and perfectly which gave me an in-depth knowledge of print media, printing technologies, and every aspect of printing terms.

// <br/><br/>

// We are based in New Delhi (India) near Indira Gandhi International Airport. We provide printing and design services to domestic and international organizations through an online web to print portal.

// </p>

// </div>


// {/* OUR MOTTO */}

// <div style={{padding:"80px",maxWidth:"1000px",margin:"auto"}}>

// <h2 style={{marginBottom:"20px"}}>Our Motto</h2>

// <p style={{lineHeight:"30px",color:"#666"}}>

// Our motto is to provide the best quality printing service with cost-effective, eco-friendly, fast turnaround.

// <br/><br/>

// We specialize in offset, screen, digital printing and sublimation, UV printing on Sunboard at our state-of-art in-house facilities.

// <br/><br/>

// Our ultimate aim is to serve our customer's needs, saving their valuable time and money.

// </p>

// </div>


// </div>

// )

// }

// export default About;

import React from "react";
import { FiPrinter, FiBox, FiRefreshCw } from "react-icons/fi";
import { FaPalette } from "react-icons/fa";
import { MdPublic, MdEco } from "react-icons/md";
import ProcessSection from "../components/ProcessSection";
import ProductRange from "../components/ProductRange";
import CustomerReviews from "../components/CustomerReviews";
import TrustedCompanies from "../components/TrustedCompanies";
import BulkOrderCTA from "../components/BulkOrderCTA";

function About(){

return(

<div>

{/* HERO SECTION */}

<div
style={{
height:"400px",
backgroundImage:"url('/images/about-banner.png')",
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
alignItems:"center",
justifyContent:"center"
}}
>

</div>


{/* WELCOME SECTION */}

<div style={{padding:"80px 20px",textAlign:"center"}}>

<p style={{
color:"#e60023",
letterSpacing:"3px",
fontWeight:"600"
}}>
WELCOME TO PROPRINT
</p>

<h2 style={{
fontSize:"42px",
maxWidth:"800px",
margin:"20px auto"
}}>
We are a fast leading e-commerce printing store in India
</h2>

<p style={{
maxWidth:"700px",
margin:"auto",
color:"#777",
lineHeight:"28px"
}}>
More than 25 years experience of running print shop and 15 years online print on demand store from traditional to digital printing process. We are dedicated to put your brand name in front of customer in organized way.
</p>

</div>


{/* FEATURES SECTION */}

<div style={{
padding:"70px 80px",
background:"#f8f8f8"
}}>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"60px"
}}>

<div style={{display:"flex",alignItems:"center",gap:"20px"}}>
<FiPrinter size={40} color="#f28b6d"/>
<h3>Top quality prints using the latest technology</h3>
</div>

<div style={{display:"flex",alignItems:"center",gap:"20px"}}>
<FaPalette size={40} color="#f28b6d"/>
<h3>Best Designers</h3>
</div>

<div style={{display:"flex",alignItems:"center",gap:"20px"}}>
<MdPublic size={40} color="#f28b6d"/>
<h3>Shipping Across India</h3>
</div>

<div style={{display:"flex",alignItems:"center",gap:"20px"}}>
<FiBox size={40} color="#f28b6d"/>
<h3>Made-to-measure packaging</h3>
</div>

<div style={{display:"flex",alignItems:"center",gap:"20px"}}>
<FiRefreshCw size={40} color="#f28b6d"/>
<h3>Reorder quickly and easily</h3>
</div>

<div style={{display:"flex",alignItems:"center",gap:"20px"}}>
<MdEco size={40} color="#f28b6d"/>
<h3>Environmentally friendly production processes</h3>
</div>

</div>

</div>


<ProcessSection/>


{/* OUR STORY */}

<div style={{padding:"80px",maxWidth:"1000px",margin:"auto"}}>

<h2 style={{textAlign:"center",fontSize:"40px",marginBottom:"40px"}}>
Our Story
</h2>

<p style={{lineHeight:"30px",color:"#666"}}>

Hi, friends,

<br/><br/>

We at Proprints, I (Suresh Kumar) a master of graphic design, printing, and print blogging.

<br/><br/>

I run an enterprise in the name of Proprints (An Online Customized Printing Company) for the last 30 years. We believe in using the latest printing technology to produce high-quality, fast printing and cost-effective services.

<br/><br/>

We executed every job meticulously and perfectly which gave me an in-depth knowledge of print media, printing technologies, and every aspect of printing terms.

<br/><br/>

We are based in New Delhi (India) near Indira Gandhi International Airport. We provide printing and design services to domestic and international organizations through an online web-to-print portal.

</p>

</div>

{/* OUR MOTTO */}

<div style={{padding:"80px",maxWidth:"1000px",margin:"auto"}}>

<h2 style={{marginBottom:"20px"}}>Our Motto</h2>

<p style={{lineHeight:"30px",color:"#666"}}>

Our motto is to provide the best quality printing service with cost-effective, eco-friendly, fast turnaround.

<br/><br/>

We specialize in offset, screen, digital printing and sublimation, UV printing on Sunboard at our state-of-art in-house facilities.

<br/><br/>

Our ultimate aim is to serve our customer's needs, saving their valuable time and money.

</p>

</div>

<ProductRange/>

<CustomerReviews/>

<TrustedCompanies/>

<BulkOrderCTA/>




</div>

)

}

export default About;