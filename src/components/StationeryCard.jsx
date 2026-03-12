// import React from "react";

// function StationeryCard({item}){

// return(

// <a
// href={item.url}
// style={{
// textDecoration:"none",
// color:"#333"
// }}
// >

// <div
// style={{
// background:"#f6f6f6",
// borderRadius:"6px",
// overflow:"hidden",
// transition:"0.3s",
// cursor:"pointer"
// }}
// >

// <img
// src={item.image}
// alt={item.name}
// style={{
// width:"100%",
// height:"220px",
// objectFit:"cover"
// }}
// />

// <div
// style={{
// padding:"18px",
// textAlign:"center",
// fontSize:"18px",
// fontWeight:"600"
// }}
// >
// {item.name}
// </div>

// </div>

// </a>

// )

// }

// export default StationeryCard;

// import React from "react";
// import { Link } from "react-router-dom";

// function StationeryCard({item}){

// return(

// <Link
// to={item.url}
// style={{
// textDecoration:"none",
// color:"#333"
// }}
// >

// <div
// style={{
// background:"#f6f6f6",
// borderRadius:"6px",
// overflow:"hidden",
// transition:"0.3s",
// cursor:"pointer"
// }}
// >

// <img
// src={item.image}
// alt={item.name}
// style={{
// width:"100%",
// height:"220px",
// objectFit:"cover"
// }}
// />

// <div
// style={{
// padding:"18px",
// textAlign:"center",
// fontSize:"18px",
// fontWeight:"600"
// }}
// >
// {item.name}
// </div>

// </div>

// </Link>

// )

// }

// export default StationeryCard;

import React from "react";
import { Link } from "react-router-dom";

function StationeryCard({item}){

return(

<Link
to={`/stationery/${item.slug}`}
style={{textDecoration:"none",color:"#333"}}
>

{/* <div
style={{
background:"#f6f6f6",
borderRadius:"6px",
overflow:"hidden",
cursor:"pointer"
}}
> */}
<div className="stationery-card">
<img
src={item.image}
alt={item.name}
style={{
width:"100%",
height:"220px",
objectFit:"cover"
}}
/>

<div
style={{
padding:"18px",
textAlign:"center",
fontSize:"18px",
fontWeight:"600"
}}
>
{item.name}
</div>

</div>

</Link>

)

}

export default StationeryCard;