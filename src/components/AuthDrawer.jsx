import React, { useState } from "react";

function AuthDrawer({ closeAuth }) {

const [tab,setTab] = useState("login");

return(

<div style={{
position:"fixed",
top:0,
right:0,
width:"420px",
height:"100%",
background:"#fff",
boxShadow:"-3px 0 10px rgba(0,0,0,0.2)",
zIndex:2000,
padding:"25px",
overflowY:"auto"
}}>

{/* CLOSE BUTTON */}

<div
onClick={closeAuth}
style={{
position:"absolute",
top:"20px",
right:"20px",
cursor:"pointer",
fontSize:"22px"
}}
>
✕
</div>

{/* TABS */}

<div style={{
display:"flex",
marginTop:"40px",
marginBottom:"30px"
}}>

<div
onClick={()=>setTab("login")}
style={{
flex:1,
padding:"12px",
textAlign:"center",
background:tab==="login"?"#e61d23":"#eee",
color:tab==="login"?"#fff":"#000",
cursor:"pointer"
}}
>
Login
</div>

<div
onClick={()=>setTab("signup")}
style={{
flex:1,
padding:"12px",
textAlign:"center",
background:tab==="signup"?"#e61d23":"#eee",
color:tab==="signup"?"#fff":"#000",
cursor:"pointer"
}}
>
Sign Up
</div>

</div>

{/* LOGIN FORM */}

{tab==="login" && (

<div>

<input
placeholder="Username / Email"
style={{width:"100%",padding:"12px",marginBottom:"10px"}}
/>

<input
type="password"
placeholder="Password"
style={{width:"100%",padding:"12px",marginBottom:"10px"}}
/>

<button
style={{
width:"100%",
padding:"12px",
background:"#e61d23",
color:"#fff",
border:"none",
marginTop:"10px"
}}
>
Sign in
</button>

</div>

)}

{/* SIGNUP FORM */}

{tab==="signup" && (

<div>

<input
placeholder="Email"
style={{width:"100%",padding:"12px",marginBottom:"10px"}}
/>

<div style={{display:"flex",gap:"10px"}}>

<input
placeholder="First Name"
style={{flex:1,padding:"12px"}}
/>

<input
placeholder="Last Name"
style={{flex:1,padding:"12px"}}
/>

</div>

<input
type="password"
placeholder="Password"
style={{width:"100%",padding:"12px",marginTop:"10px"}}
/>

<input
type="password"
placeholder="Confirm Password"
style={{width:"100%",padding:"12px",marginTop:"10px"}}
/>

<button
style={{
width:"100%",
padding:"12px",
background:"#e61d23",
color:"#fff",
border:"none",
marginTop:"15px"
}}
>
Sign Up
</button>

</div>

)}

</div>

);

}

export default AuthDrawer;