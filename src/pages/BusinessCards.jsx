// import React from "react";
// import { Link } from "react-router-dom";

// const popularCards = [
// {
// name:"Standard Business Card",
// image:"/images/cards/standard.png",
// slug:"standard-business-card"
// },
// {
// name:"Laminated Business Card",
// image:"/images/cards/laminated.png",
// slug:"laminated-business-card"
// },
// {
// name:"Textured Business Card",
// image:"/images/cards/textured.png",
// slug:"textured-business-card"
// },
// {
// name:"Metallic Business Card",
// image:"/images/cards/metallic.png",
// slug:"metallic-business-card"
// },
// {
// name:"Round Corner Business Card",
// image:"/images/cards/round.png",
// slug:"round-corner-business-card"
// },
// {
// name:"Cheap Business Card",
// image:"/images/cards/cheap.png",
// slug:"cheap-business-card"
// },
// {
// name:"Non-Tearable Business Card",
// image:"/images/cards/non.png",
// slug:"non-tearable-business-card"
// }
// ];

// const premiumCards = [
// {
// name:"Spot UV Business Card",
// image:"/images/cards/spotuv.png",
// slug:"spot-uv-card"
// },
// {
// name:"Embossed Business Card",
// image:"/images/cards/embossed.png",
// slug:"embossed-card"
// },
// {
// name:"Foil Stamped Business Card",
// image:"/images/cards/foil.png",
// slug:"foil-card"
// },
// {
// name:"Eco Friendly Business Card",
// image:"/images/cards/eco.png",
// slug:"eco-card"
// }
// ];

// const specializedCards = [
// {
// name:"QR Business Card",
// image:"/images/cards/qr.png",
// slug:"qr-card"
// },
// {
// name:"PVC NFC Business Card",
// image:"/images/cards/nfc.png",
// slug:"nfc-card"
// },
// {
// name:"Metal NFC Business Card",
// image:"/images/cards/metalnfc.png",
// slug:"metal-nfc"
// }
// ];

// function BusinessCards(){

// return(

// <div style={{padding:"60px 80px"}}>

// {/* MOST POPULAR */}

// <h2 style={{fontSize:"34px",marginBottom:"30px"}}>

// Most Popular Business Cards

// </h2>

// <div style={{
// display:"grid",
// gridTemplateColumns:"repeat(4,1fr)",
// gap:"30px"
// }}>

// {popularCards.map((card)=>(
// <Link key={card.slug} to={`/products/${card.slug}`} style={{textDecoration:"none"}}>

// <div>

// <img src={card.image}
// style={{width:"100%",height:"220px",objectFit:"cover"}}
// />

// <h3 style={{marginTop:"10px"}}>{card.name}</h3>

// </div>

// </Link>
// ))}

// </div>

// {/* PREMIUM */}

// <h2 style={{fontSize:"34px",marginTop:"70px",marginBottom:"30px"}}>

// Premium Business Cards

// </h2>

// <div style={{
// display:"grid",
// gridTemplateColumns:"repeat(4,1fr)",
// gap:"30px"
// }}>

// {premiumCards.map((card)=>(
// <Link key={card.slug} to={`/products/${card.slug}`}>

// <div>

// <img src={card.image}
// style={{width:"100%",height:"220px",objectFit:"cover"}}
// />

// <h3 style={{marginTop:"10px"}}>{card.name}</h3>

// </div>

// </Link>
// ))}

// </div>

// {/* SPECIALIZED */}

// <h2 style={{fontSize:"34px",marginTop:"70px",marginBottom:"30px"}}>

// Specialized Business Cards

// </h2>

// <div style={{
// display:"grid",
// gridTemplateColumns:"repeat(4,1fr)",
// gap:"30px"
// }}>

// {specializedCards.map((card)=>(
// <Link key={card.slug} to={`/products/${card.slug}`}>

// <div>

// <img src={card.image}
// style={{width:"100%",height:"220px",objectFit:"cover"}}
// />

// <h3 style={{marginTop:"10px"}}>{card.name}</h3>

// </div>

// </Link>
// ))}

// </div>

// {/* SEO TEXT SECTION */}

// <div style={{marginTop:"80px",maxWidth:"900px"}}>

// <h2>Visiting Card Printing Near Me – Fast & Affordable Printing</h2>

// <p>

// Visiting cards are the identity of your organization, your brand name showcase, and your business’s first introduction.

// We offer a wide range of visiting cards for businesses and individuals.

// </p>

// <h3>Printing Techniques We Use</h3>

// <ul>

// <li>Digital Printing</li>
// <li>Offset Printing</li>
// <li>Screen Printing</li>
// <li>Foil Printing</li>
// <li>UV Printing</li>
// <li>Laser Engraving</li>

// </ul>

// <h3>Why Choose Us</h3>

// <ul>

// <li>Same Day Printing</li>
// <li>Affordable Pricing</li>
// <li>Custom Designs</li>
// <li>Premium Finishes</li>

// </ul>

// </div>

// </div>

// )

// }

// export default BusinessCards;


import React from "react";
import { Link } from "react-router-dom";

const popularCards = [
{
name:"Standard Business Card",
image:"/images/cards/standard.png",
slug:"standard-business-card"
},
{
name:"Laminated Business Card",
image:"/images/cards/laminated.png",
slug:"laminated-business-card"
},
{
name:"Textured Business Card",
image:"/images/cards/textured.png",
slug:"textured-business-card"
},
{
name:"Metallic Business Card",
image:"/images/cards/metallic.png",
slug:"metallic-business-card"
},
{
name:"Round Corner Business Card",
image:"/images/cards/round.png",
slug:"round-corner-business-card"
},
{
name:"Cheap Business Card",
image:"/images/cards/cheap.png",
slug:"cheap-business-card"
},
{
name:"Non-Tearable Business Card",
image:"/images/cards/non.png",
slug:"non-tearable-business-card"
}
];

const premiumCards = [
{
name:"Spot UV Business Card",
image:"/images/cards/spotuv.png",
slug:"spot-uv-card"
},
{
name:"Embossed Business Card",
image:"/images/cards/embossed.png",
slug:"embossed-card"
},
{
name:"Foil Stamped Business Card",
image:"/images/cards/foil.png",
slug:"foil-card"
},
{
name:"Eco Friendly Business Card",
image:"/images/cards/eco.png",
slug:"eco-card"
},
{
name:"Transparent Business Card",
image:"/images/cards/transparent.png",
slug:"trans-card"
},
{
name:"Custom Shape Business Card",
image:"/images/cards/custome.png",
slug:"custome-card"
},
{
name:"PVC Business Card",
image:"/images/cards/pvc.png",
slug:"pvc-card"
}

];

const specializedCards = [
{
name:"QR Business Card",
image:"/images/cards/qr.png",
slug:"qr-card"
},
{
name:"PVC NFC Business Card",
image:"/images/cards/nfc.png",
slug:"nfc-card"
},
{
name:"Metal NFC Business Card",
image:"/images/cards/metalnfc.png",
slug:"metal-nfc"
}
];

function BusinessCards(){

return(

<div style={{padding:"60px 80px"}}>

{/* MOST POPULAR */}

<h2 style={{fontSize:"34px",marginBottom:"30px"}}>
Most Popular Business Cards
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"30px"
}}
>

{popularCards.map((card)=>(

<Link
key={card.slug}
to={`/products/${card.slug}`}
style={{textDecoration:"none",color:"#333"}}
>

<div className="stationery-card">

<img
src={card.image}
style={{width:"100%",height:"220px",objectFit:"cover"}}
/>

<h3 style={{marginTop:"10px"}}>
{card.name}
</h3>

</div>

</Link>

))}

</div>

{/* PREMIUM */}

<h2 style={{fontSize:"34px",marginTop:"70px",marginBottom:"30px"}}>
Premium Business Cards
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"30px"
}}
>

{premiumCards.map((card)=>(

<Link
key={card.slug}
to={`/products/${card.slug}`}
style={{textDecoration:"none",color:"#333"}}
>

<div className="stationery-card">

<img
src={card.image}
style={{width:"100%",height:"220px",objectFit:"cover"}}
/>

<h3 style={{marginTop:"10px"}}>
{card.name}
</h3>

</div>

</Link>

))}

</div>

{/* SPECIALIZED */}

<h2 style={{fontSize:"34px",marginTop:"70px",marginBottom:"30px"}}>
Specialized Business Cards
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"30px"
}}
>

{specializedCards.map((card)=>(

<Link
key={card.slug}
to={`/products/${card.slug}`}
style={{textDecoration:"none",color:"#333"}}
>

<div className="stationery-card">

<img
src={card.image}
style={{width:"100%",height:"220px",objectFit:"cover"}}
/>

<h3 style={{marginTop:"10px"}}>
{card.name}
</h3>

</div>

</Link>

))}

</div>

{/* SEO TEXT SECTION */}

<div style={{marginTop:"80px",maxWidth:"900px"}}>

<h2>Visiting Card Printing Near Me – Fast & Affordable Printing</h2>

<p>
Visiting cards are the identity of your organization, your brand name showcase, and your business’s first introduction.
We offer a wide range of visiting cards for businesses and individuals.
</p>

<h3>Printing Techniques We Use</h3>

<ul>
<li>Digital Printing</li>
<li>Offset Printing</li>
<li>Screen Printing</li>
<li>Foil Printing</li>
<li>UV Printing</li>
<li>Laser Engraving</li>
</ul>

<h3>Why Choose Us</h3>

<ul>
<li>Same Day Printing</li>
<li>Affordable Pricing</li>
<li>Custom Designs</li>
<li>Premium Finishes</li>
</ul>

</div>

</div>

)

}

export default BusinessCards;