import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function HeroSlider() {

const slides = [

{
title: "Stationery",
heading: "Make Your First Impression Count.",
desc: "Premium business cards, custom designed & printed for your brand.",
btn: "View All",
bg: "#e41e26",
leftImg: "/images/card-left.png",
rightImg: "/images/card-right.png"
},

{
title: "Stationery",
heading: "Your Signature, Made Official.",
desc: "Custom rubber stamps for office, shop & personal use.",
btn: "Shop Now",
bg: "#f5a623",
leftImg: "/images/stamp-left.png",
rightImg: "/images/stamp-right.png"
},

{
title: "Custom Apparel",
heading: "Wear Your Brand. Wear Your Message",
desc: "Custom printed T-shirts for business, events & teams.",
btn: "Order Now",
bg: "#d8892c",
leftImg: "/images/tshirt-left.png",
rightImg: "/images/tshirt-right.png"
}

];

const [current,setCurrent] = useState(0);

const nextSlide = () => {
setCurrent((prev)=>(prev+1)%slides.length);
};

const prevSlide = () => {
setCurrent((prev)=>(prev-1+slides.length)%slides.length);
};

const slide = slides[current];

return (

<div
style={{
width:"100%",
height:"600px",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
background:slide.bg,
position:"relative",
overflow:"hidden"
}}
>

{/* LEFT IMAGE */}

<img
src={slide.leftImg}
alt=""
style={{
height:"420px",
marginLeft:"60px"
}}
/>

{/* CENTER TEXT */}

<div
style={{
textAlign:"center",
color:"white",
maxWidth:"500px"
}}
>

<p style={{fontSize:"20px"}}>{slide.title}</p>

<h1
style={{
fontSize:"48px",
fontWeight:"bold",
margin:"20px 0"
}}
>
{slide.heading}
</h1>

<p style={{fontSize:"18px"}}>
{slide.desc}
</p>

<button
style={{
marginTop:"30px",
padding:"14px 40px",
borderRadius:"30px",
border:"none",
background:"#fff",
cursor:"pointer",
fontWeight:"bold"
}}
>
{slide.btn}
</button>

</div>

{/* RIGHT IMAGE */}

<img
src={slide.rightImg}
alt=""
style={{
height:"420px",
marginRight:"60px"
}}
/>

{/* LEFT ARROW */}

<div
onClick={prevSlide}
style={{
position:"absolute",
left:"20px",
top:"50%",
transform:"translateY(-50%)",
width:"70px",
height:"70px",
background:"#f5d49a",
borderRadius:"50%",
display:"flex",
alignItems:"center",
justifyContent:"center",
cursor:"pointer"
}}
>
<FiChevronLeft size={32}/>
</div>

{/* RIGHT ARROW */}

<div
onClick={nextSlide}
style={{
position:"absolute",
right:"20px",
top:"50%",
transform:"translateY(-50%)",
width:"70px",
height:"70px",
background:"#f5d49a",
borderRadius:"50%",
display:"flex",
alignItems:"center",
justifyContent:"center",
cursor:"pointer"
}}
>
<FiChevronRight size={32}/>
</div>

</div>

);

}

export default HeroSlider;