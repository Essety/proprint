import React, { useState } from "react";

function BlogSection({ blogs }) {

const [visible,setVisible] = useState(4);

const loadMore = () => {
setVisible(8);
};

return(

<div style={{padding:"60px 80px"}}>

<h2 style={{
fontSize:"32px",
marginBottom:"40px"
}}>
About Printing Technology
</h2>

{/* BLOG GRID */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"30px"
}}>

{blogs.slice(0,visible).map((blog,index)=>(

<div
key={index}
style={{
border:"1px solid #eee",
padding:"20px",
borderRadius:"6px",
background:"#fff"
}}
>

<h3 style={{marginBottom:"10px"}}>
{blog.title}
</h3>

<p style={{
color:"#666",
fontSize:"14px",
marginBottom:"10px"
}}>
{blog.desc}
</p>

<a href="#" style={{color:"blue",fontSize:"14px"}}>
Read More
</a>

<div style={{
display:"flex",
alignItems:"center",
marginTop:"15px",
gap:"10px"
}}>

<img
src={blog.authorImage}
alt=""
style={{
width:"35px",
height:"35px",
borderRadius:"50%"
}}
/>

<div>

<p style={{fontSize:"14px"}}>
{blog.author}
</p>

<p style={{fontSize:"12px",color:"#888"}}>
{blog.date}
</p>

</div>

</div>

</div>

))}

</div>

{/* LOAD MORE BUTTON */}

{visible < blogs.length && (

<div style={{textAlign:"center",marginTop:"40px"}}>

<button
onClick={loadMore}
style={{
background:"#e53935",
color:"#fff",
padding:"12px 30px",
border:"none",
borderRadius:"6px",
cursor:"pointer",
fontSize:"16px"
}}
>
Load More
</button>

</div>

)}

</div>

)

}

export default BlogSection;