import React from "react";
import { FiSearch } from "react-icons/fi";

function Blog() {

const blogs = [
{
title:"Best Place To Print Letterpress Business Card In India",
desc:"High quality antique Letterpress Business Card (PMS ink) traditional raised printing method & Standard Business Card (CYMK ink) modern printing"
},
{
title:"What Are The Graduation Dress?",
desc:"Graduation dresses are formal academic dress accessories worn on the graduation day to celebrate the academic convocation"
},
{
title:"Types Of Fabric Label For Garments",
desc:"Labels and hang tags are garment decoration & information accessories, play a crucial role when it comes to product packaging"
},
{
title:"Top 10 Table Top Display Solution For Events",
desc:"Proprints is a customized printing company on variety of object and advertising materials display advertising"
},
{
title:"Where To Get Clear Sticker Printing In Delhi",
desc:"Proprints manufactures more than 15 different types of stickers. Clear sticker printing is available in different size"
},
{
title:"Difference Between Thermal And Inkjet Printable PVC ID Card Material",
desc:"Blank PVC card materials are intensely made to keep in mind the print application technology to be applied to them"
}
];

return (

<div>

{/* HERO SECTION */}

<div
style={{
height:"320px",
backgroundImage:"url('/images/blog-banner.png')",
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
alignItems:"center",
justifyContent:"center",
flexDirection:"column",
color:"#000"
}}
>

<p style={{fontSize:"20px"}}>Blog</p>

<h1 style={{fontSize:"56px",margin:"10px 0"}}>
Discover our latest blogs
</h1>

<div style={{display:"flex",marginTop:"20px"}}>

<input
placeholder="Your email"
style={{
padding:"14px",
width:"400px",
border:"1px solid #ddd",
borderRadius:"4px 0 0 4px"
}}
/>

<button
style={{
background:"#e60023",
color:"#fff",
border:"none",
padding:"14px 30px",
borderRadius:"0 30px 30px 0",
cursor:"pointer"
}}
>
Subscribe
</button>

</div>

</div>


{/* MAIN CONTENT */}

<div
style={{
padding:"80px",
display:"grid",
gridTemplateColumns:"2fr 1fr",
gap:"60px"
}}
>


{/* LEFT BLOG GRID */}

<div>

<h2 style={{marginBottom:"30px"}}>Blog</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"40px"
}}
>

{blogs.map((blog,index)=>(

<div key={index}>

<h3 style={{fontSize:"26px"}}>
{blog.title}
</h3>

<p style={{color:"#777",margin:"15px 0"}}>
{blog.desc}
</p>

<a
href="#"
style={{
color:"#e60023",
textDecoration:"underline"
}}
>
Read More
</a>

</div>

))}

</div>

</div>



{/* RIGHT SIDEBAR */}

<div>

{/* SEARCH */}

<h3>Search</h3>

<div style={{position:"relative",margin:"20px 0 40px 0"}}>

<input
placeholder="Search..."
style={{
width:"100%",
padding:"14px",
border:"1px solid #ddd",
borderRadius:"6px"
}}
/>

<FiSearch
style={{
position:"absolute",
right:"10px",
top:"15px",
color:"#999"
}}
/>

</div>



{/* FEATURED */}

<h3>Featured</h3>

<div
style={{
border:"1px solid #eee",
padding:"20px",
marginTop:"20px"
}}
>

<h4>Sash Titles Names for Farewell Students</h4>

<p style={{color:"#777"}}>
Are you a junior student, event planner company, or college...
</p>

<a href="#">Read More</a>

<p style={{marginTop:"10px",color:"#777"}}>
Suresh Kumar • April 23, 2023
</p>

</div>



{/* LATEST */}

<h3 style={{marginTop:"40px"}}>Latest</h3>

<div
style={{
border:"1px solid #eee",
padding:"20px",
marginTop:"20px"
}}
>

<h4>Best Place to Print Letterpress Business Card in India</h4>

<p style={{color:"#777"}}>
High quality antique Letterpress Business Card (PMS ink)
</p>

<a href="#">Read More</a>

<p style={{marginTop:"10px",color:"#777"}}>
Suresh Kumar • March 5, 2026
</p>

</div>

</div>

</div>

</div>

);

}

export default Blog;