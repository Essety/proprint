import React from "react";

function Newsletter(){

return(

<div
style={{
padding:"80px 20px",
textAlign:"center",
background:"#fff"
}}
>

<h2 style={{
fontSize:"28px",
marginBottom:"20px"
}}>
Get the latest blog, offer & more delivered to your inbox.
</h2>

<input
type="email"
placeholder="Your email"
style={{
width:"500px",
maxWidth:"90%",
padding:"16px",
borderRadius:"6px",
border:"1px solid #ddd",
fontSize:"16px"
}}
/>

</div>

)

}

export default Newsletter;