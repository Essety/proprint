import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ServicesCarousel() {

const cards = [

{img:"/images/service1.png"},
{img:"/images/service2.png"},
{img:"/images/service3.png"},
{img:"/images/service4.png"},
{img:"/images/service5.png"}

];

const visibleCards = 4;
const maxIndex = cards.length - visibleCards;

const [index,setIndex] = useState(0);

const next = () => {
if(index < maxIndex){
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

<h2 style={{
fontSize:"36px",
fontWeight:"700",
marginBottom:"40px"
}}>
Shop These Customised Printing Services
</h2>

<div style={{
position:"relative",
overflow:"hidden"
}}>

{/* LEFT ARROW */}

<div
onClick={prev}
style={{
position:"absolute",
left:"-20px",
top:"40%",
zIndex:2,
width:"50px",
height:"50px",
background:"#fff",
borderRadius:"50%",
display:"flex",
alignItems:"center",
justifyContent:"center",
cursor:"pointer",
boxShadow:"0 2px 10px rgba(0,0,0,0.2)"
}}
>
<FiChevronLeft size={24}/>
</div>

{/* CARDS CONTAINER */}

<div
style={{
display:"flex",
gap:"20px",
transition:"0.4s",
transform:`translateX(-${index*320}px)`
}}
>

{cards.map((card,i)=>(
<div
key={i}
style={{
minWidth:"300px",
borderRadius:"8px",
overflow:"hidden"
}}
>

<img
src={card.img}
alt=""
style={{
width:"100%",
height:"220px",
objectFit:"cover"
}}
/>

</div>
))}

</div>

{/* RIGHT ARROW */}

<div
onClick={next}
style={{
position:"absolute",
right:"-20px",
top:"40%",
zIndex:2,
width:"50px",
height:"50px",
background:"#fff",
borderRadius:"50%",
display:"flex",
alignItems:"center",
justifyContent:"center",
cursor:"pointer",
boxShadow:"0 2px 10px rgba(0,0,0,0.2)"
}}
>
<FiChevronRight size={24}/>
</div>

</div>

{/* DOTS */}

<div style={{textAlign:"center",marginTop:"20px"}}>

{Array.from({length:maxIndex+1}).map((_,i)=>(
<span
key={i}
style={{
height:"8px",
width:"8px",
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

export default ServicesCarousel;