import React from "react";

function CustomerReviews(){

return(

<div style={{
padding:"100px 80px",
background:"#f7f7f7",
display:"grid",
gridTemplateColumns:"1fr 1fr 1fr 1fr",
gap:"30px"
}}>

{/* LEFT */}

<div>

<h2 style={{fontSize:"42px"}}>Customers Love</h2>

<p style={{color:"#777",margin:"15px 0"}}>
Over 208 Reviews
</p>

<button style={{
background:"#e60023",
color:"#fff",
border:"none",
padding:"12px 28px",
borderRadius:"6px",
cursor:"pointer"
}}>
View More
</button>

</div>


{/* REVIEW 1 */}

<div style={{background:"#fff",padding:"30px",borderRadius:"10px"}}>

⭐⭐⭐⭐⭐

<p style={{marginTop:"20px",color:"#555"}}>
They are a life savior. Never imagined it can be so easy explaining the entire requirement on WhatsApp and placing the order online.
</p>

<h4 style={{marginTop:"20px"}}>Harshita Rai</h4>

</div>


{/* REVIEW 2 */}

<div style={{background:"#fff",padding:"30px",borderRadius:"10px"}}>

⭐⭐⭐⭐

<p style={{marginTop:"20px",color:"#555"}}>
Proprints saved me when I had to print documents urgently. They answered my call at 1 AM and helped me reach.
</p>

<h4 style={{marginTop:"20px"}}>Pamela Varughese</h4>

</div>


{/* REVIEW 3 */}

<div style={{background:"#fff",padding:"30px",borderRadius:"10px"}}>

⭐⭐⭐⭐⭐

<p style={{marginTop:"20px",color:"#555"}}>
A saviour shop. Open 24x7 with spot printouts. The owner was very helpful and coordinated with us.
</p>

<h4 style={{marginTop:"20px"}}>Vibhor Singh</h4>

</div>

</div>

)

}

export default CustomerReviews