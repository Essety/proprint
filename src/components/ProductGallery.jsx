import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ProductGallery(){

const images = [
"/images/gallery1.png",
"/images/gallery2.png",
"/images/gallery3.png",
"/images/gallery4.png",
"/images/gallery5.png",
"/images/gallery6.png",
"/images/gallery7.png",
"/images/gallery8.png"
];

const visible = 5;

const [index,setIndex] = useState(0);

const next = () => {
if(index < images.length-visible){
setIndex(index+1);
}
};

const prev = () => {
if(index > 0){
setIndex(index-1);
}
};

return(

<div style={{padding:"60px 80px"}}>

<h2 style={{marginBottom:"40px"}}>
Product Gallery
</h2>

<div style={{position:"relative",overflow:"hidden"}}>

{/* LEFT */}

<div
onClick={prev}
style={{
position:"absolute",
left:"-20px",
top:"40%",
width:"45px",
height:"45px",
borderRadius:"50%",
background:"#fff",
display:"flex",
alignItems:"center",
justifyContent:"center",
cursor:"pointer",
boxShadow:"0 2px 10px rgba(0,0,0,0.2)"
}}
>
<FiChevronLeft/>
</div>

{/* IMAGES */}

<div
style={{
display:"flex",
gap:"20px",
transition:"0.4s",
transform:`translateX(-${index*260}px)`
}}
>

{images.map((img,i)=>(
<img
key={i}
src={img}
alt=""
style={{
width:"240px",
height:"240px",
objectFit:"cover",
borderRadius:"4px"
}}
/>
))}

</div>

{/* RIGHT */}

<div
onClick={next}
style={{
position:"absolute",
right:"-20px",
top:"40%",
width:"45px",
height:"45px",
borderRadius:"50%",
background:"#fff",
display:"flex",
alignItems:"center",
justifyContent:"center",
cursor:"pointer",
boxShadow:"0 2px 10px rgba(0,0,0,0.2)"
}}
>
<FiChevronRight/>
</div>

</div>

{/* DOTS */}

<div style={{textAlign:"center",marginTop:"20px"}}>

{Array.from({length:images.length-visible+1}).map((_,i)=>(
<span
key={i}
style={{
height:"6px",
width:"6px",
margin:"0 6px",
background:index===i?"#000":"#ccc",
display:"inline-block",
borderRadius:"50%"
}}
/>
))}

</div>

</div>

)

}

export default ProductGallery;