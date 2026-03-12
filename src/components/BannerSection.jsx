import React from "react";

function BannerSection(){

return(

<div style={{padding:"60px 80px"}}>

<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"30px"
}}
>

{/* FIRST BANNER */}

<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
alignItems:"center",
background:"#f5f5f5"
}}
>

<img
src="/images/poster.png"
alt="poster"
style={{
width:"100%",
height:"100%",
objectFit:"cover"
}}
/>

<div style={{textAlign:"center"}}>

<h2 style={{marginBottom:"20px"}}>
Scientific Poster Printing
</h2>

<button
style={{
padding:"10px 20px",
border:"1px solid #333",
background:"transparent",
cursor:"pointer"
}}
>
Order Now
</button>

</div>

</div>

{/* SECOND BANNER */}

<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
alignItems:"center",
background:"#f5f5f5"
}}
>

<img
src="/images/banner.png"
alt="banner"
style={{
width:"100%",
height:"100%",
objectFit:"cover"
}}
/>

<div style={{textAlign:"center"}}>

<h2 style={{marginBottom:"20px"}}>
Banner Printing
</h2>

<button
style={{
padding:"10px 20px",
border:"1px solid #333",
background:"transparent",
cursor:"pointer"
}}
>
Order Now
</button>

</div>

</div>

</div>

</div>

)

}

export default BannerSection;