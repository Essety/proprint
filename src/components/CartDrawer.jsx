import React from "react";

function CartDrawer({closeCart}){

return(

<div style={{
position:"fixed",
top:0,
right:0,
width:"350px",
height:"100%",
background:"#fff",
boxShadow:"-3px 0 10px rgba(0,0,0,0.2)",
zIndex:2000,
padding:"20px"
}}>

<div
onClick={closeCart}
style={{
position:"absolute",
top:"15px",
right:"15px",
cursor:"pointer"
}}
>
✕
</div>

<h3 style={{marginTop:"40px"}}>
No products in the cart.
</h3>

</div>

);

}

export default CartDrawer;