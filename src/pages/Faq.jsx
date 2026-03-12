import React, {useState} from "react";

function Accordion({question,answer}){

const [open,setOpen] = useState(false);

return(

<div style={{borderBottom:"1px solid #ddd",padding:"18px 0"}}>

<div
onClick={()=>setOpen(!open)}
style={{
cursor:"pointer",
fontWeight:"600",
display:"flex",
justifyContent:"space-between"
}}
>

<span>▸ {question}</span>

</div>

{open && (

<p style={{marginTop:"10px",color:"#777"}}>
{answer}
</p>

)}

</div>

)

}


function Faq(){

return(

<div style={{padding:"80px"}}>

<h1 style={{textAlign:"center",marginBottom:"60px"}}>
FAQs
</h1>


{/* MY ORDER */}

<h2 style={{marginBottom:"20px"}}>
My Order
</h2>

<Accordion
question="How do I place an order?"
answer="Browse the products, choose customization options, add to cart and complete the checkout process."
/>

<Accordion
question="Can I place multiple orders for a single product?"
answer="Yes, you can place multiple orders or increase the quantity during checkout."
/>

<Accordion
question="Will I get a design proof / preview before placing the order?"
answer="Yes, in many cases we provide design previews before final printing."
/>

<Accordion
question="Can I share multiple images / designs in an order?"
answer="Yes, you can upload multiple files depending on the product."
/>

<Accordion
question="Should I place an order only via online?"
answer="You can place orders online or contact us directly for assistance."
/>


{/* PRODUCTS */}

<h2 style={{marginTop:"50px",marginBottom:"20px"}}>
Products
</h2>

<Accordion
question="What if I can't find the product I'm looking for?"
answer="Please contact our support team and we will help you with custom printing solutions."
/>


{/* PAYMENT */}

<h2 style={{marginTop:"50px",marginBottom:"20px"}}>
Payment
</h2>

<Accordion
question="What payment methods are available?"
answer="We accept UPI, credit cards, debit cards, and bank transfers."
/>

<Accordion
question="Payment made but order not placed?"
answer="Please contact support with your payment details so we can verify the transaction."
/>

<Accordion
question="What if you are unable to make payment online?"
answer="You can contact us for alternative payment methods."
/>

</div>

)

}

export default Faq;