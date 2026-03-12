import React, { useState } from "react";
import { API } from "../config/api";

function AuthModal({ closeModal }) {

const [tab,setTab] = useState("login");

const [loginData,setLoginData] = useState({
email:"",
password:""
});

const [signupData,setSignupData] = useState({
email:"",
firstName:"",
lastName:"",
password:"",
confirmPassword:""
});

const handleLogin = async() => {

try{

const res = await fetch(API.LOGIN,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(loginData)
});

const data = await res.json();

console.log(data);

}catch(err){
console.log(err);
}

};

const handleSignup = async() => {

try{

const res = await fetch(API.REGISTER,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(signupData)
});

const data = await res.json();

console.log(data);

}catch(err){
console.log(err);
}

};

return(

<div style={{
position:"fixed",
top:0,
left:0,
width:"100%",
height:"100%",
background:"rgba(0,0,0,0.6)",
display:"flex",
justifyContent:"center",
alignItems:"center",
zIndex:2000
}}>

<div style={{
width:"500px",
background:"#fff",
padding:"30px",
borderRadius:"6px",
position:"relative"
}}>

<div
onClick={closeModal}
style={{
position:"absolute",
top:"15px",
right:"15px",
cursor:"pointer",
fontSize:"20px"
}}
>
✕
</div>

{/* TABS */}

<div style={{
display:"flex",
marginBottom:"20px"
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
style={{width:"100%",padding:"10px",marginBottom:"10px"}}
onChange={(e)=>setLoginData({...loginData,email:e.target.value})}
/>

<input
type="password"
placeholder="Password"
style={{width:"100%",padding:"10px",marginBottom:"10px"}}
onChange={(e)=>setLoginData({...loginData,password:e.target.value})}
/>

<button
onClick={handleLogin}
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
style={{width:"100%",padding:"10px",marginBottom:"10px"}}
onChange={(e)=>setSignupData({...signupData,email:e.target.value})}
/>

<div style={{display:"flex",gap:"10px"}}>

<input
placeholder="First Name"
style={{flex:1,padding:"10px"}}
onChange={(e)=>setSignupData({...signupData,firstName:e.target.value})}
/>

<input
placeholder="Last Name"
style={{flex:1,padding:"10px"}}
onChange={(e)=>setSignupData({...signupData,lastName:e.target.value})}
/>

</div>

<input
type="password"
placeholder="Password"
style={{width:"100%",padding:"10px",marginTop:"10px"}}
onChange={(e)=>setSignupData({...signupData,password:e.target.value})}
/>

<input
type="password"
placeholder="Confirm Password"
style={{width:"100%",padding:"10px",marginTop:"10px"}}
onChange={(e)=>setSignupData({...signupData,confirmPassword:e.target.value})}
/>

<button
onClick={handleSignup}
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

</div>

);

}

export default AuthModal;