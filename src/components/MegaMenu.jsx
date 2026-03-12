import React from "react";

function MegaMenu({ type }) {

const menus = {

stationery:[
{
title:"BUSINESS CARD",
items:[
"Cheap Business Card",
"Standard Business Card",
"Textured Business Card",
"Spot UV Business Card",
"QR Business Card",
"Custom Shape Business Card",
"Metal NFC Card",
"PVC NFC Card"
]
},
{
title:"OFFICE SUPPLIES",
items:[
"Letterhead",
"Envelope",
"Receipt Book",
"Bill Book",
"Cash Voucher"
]
},
{
title:"CARD & INVITATION",
items:[
"Wedding Card",
"Engagement Card",
"Post Card",
"Greeting Card",
"Event Ticket",
"Business Invitation",
"Thank Card",
"Birthday Card"
]
},
{
title:"ID CARD & LANYARD",
items:[
"Plastic ID Card",
"Paper ID Card",
"Lanyard",
"Accessories"
]
},
{
title:"NOTEBOOK",
items:[
"Staple Notebook",
"Wire-o Notebook",
"Perfect Bound Notebook",
"Hard Bound Notebook"
]
},
{
title:"INK & STAMP",
items:[
"Pre-ink Stamp",
"Self-ink Stamp",
"Polymer Stamp",
"Accessories"
]
}
],

promotional:[
{
title:"OFFICE ESSENTIALS",
items:[
"Cheap Business Card",
"Notepad",
"Pen",
"Mouse pad"
]
},
{
title:"DRINKWARE",
items:[
"Mugs",
"Self-ink Stamp",
"Coaster",
"Flasks"
]
},
{
title:"MARKETING COLLATERALS",
items:[
"Flyer",
"Brochure",
"Catalogue",
"Post Card",
"Banner",
"Promotional Poster",
"Presentation Folder"
]
},
{
title:"EVENT & TRADE SHOW ITEMS",
items:[
"Banner & Backdrop",
"Event Ticket",
"Event ID Card",
"Badge",
"Sticker"
]
},
{
title:"WEARABLE & APPAREL",
items:[
"Cap",
"Tshirt",
"Jersey",
"Jacket & Hoodies"
]
},
{
title:"OTHERS",
items:[
"Keychains",
"Bags",
"Tote Bags",
"Bookmarks"
]
}
],

signs:[
{
title:"OUTDOOR SIGNS",
items:[
"Vinyl",
"Banners",
"Flags",
"Canvas Rolls"
]
},
{
title:"BOARD",
items:[
"Acrylic Board",
"Lollipop Board",
"Adjustable Banner",
"Fabric Banner",
"LED Frame",
"Backlit Board",
"Frontlit Board"
]
},
{
title:"STANDEE",
items:[
"Regular Standee",
"Luxury Standee",
"Table Top Standee",
"Chrome Metal Banner Stand"
]
},
{
title:"INTERACTIVE MARKETING",
items:[
"Tent Card",
"Rate Card",
"Danglers",
"Menu",
"Gift Voucher"
]
},
{
title:"NAME PLATE & FOAM BOARD",
items:[
"Engraved Nameplate",
"Sunboard",
"Sunpack",
"Tabletop Signs",
"Magnetic Signs",
"Magnetic Name Badges"
]
},
{
title:"MARKETING COLLATERALS",
items:[
"Flyer & Leaflet",
"Poster",
"Presentation Folder",
"Brochure",
"Booklets",
"Mouse Pad"
]
}
],

box:[
{
title:"STICKERS & LABELS",
items:[
"Product Packaging Labels",
"Circle Labels",
"Waterproof Labels",
"Roll Labels",
"Sheet Stickers",
"Foil Stickers",
"Custom Shape Stickers",
"Spot UV Stickers",
"Clear Stickers"
]
},
{
title:"COTTON BAG",
items:[
"Small Size Cotton Bag",
"Medium Size Cotton Bag",
"Large Size Cotton Bag"
]
},
{
title:"PAPER BAG",
items:[
"Retail Paper Bag",
"Restaurant Paper Bag",
"Eco-Friendly Paper Bag",
"White Paper Bag"
]
},
{
title:"PACKAGING SUPPLIES",
items:[
"Packaging Tape",
"Hand Tag",
"Luggage Tag",
"Custom Tissue Paper"
]
},
{
title:"BOXES",
items:[
"Product Box",
"Luxury Gift Box",
"Custom Box",
"Kraft Box",
"Rigid Box"
]
},
{
title:"OTHERS",
items:[
"Custom Paper Pouch",
"Wrapping Paper"
]
}
],

gift:[
{
title:"CORPORATE GIFTS",
items:[
"Customized Pens",
"Desk Accessories",
"Exclusive Gifts",
"Custom Mug",
"Custom Keychains",
"Custom USB Drives",
"Table Calendar"
]
},
{
title:"ACADEMIC",
items:[
"Certificates",
"Graduation Sash",
"Graduation Cap",
"Customized Pens"
]
},
{
title:"AWARDS AND TROPHIES",
items:[
"Plaques (engraved)",
"Trophies (customized)",
"Medals",
"Employee of the Month Awards",
"Years of Service Awards",
"Sports Trophies",
"Academic Awards"
]
},
{
title:"EXCLUSIVE GIFT",
items:[
"Customize Gift Box",
"Engraved Glassware",
"Customize Gold Coin"
]
},
{
title:"PERSONALIZED GIFTS",
items:[
"Personalized T-shirts",
"Personalized Cap",
"Personalized Hoodie",
"Custom Tote Bags",
"Custom Phone Cases",
"Personalized Cushion"
]
},
{
title:"PARTY FAVORS",
items:[
"Cake Toppers",
"Sash",
"Happy Birthday Banner",
"Personalized Balloon",
"Face Cutout"
]
}
],

apparel:[
{
title:"TECHNIQUE",
items:[
"DTF Printing",
"Screen Printing",
"Vinyl Cut & Paste",
"Sublimation Printing",
"Embroidery"
]
},
{
title:"STYLE",
items:[
"Round Neck T-shirt",
"Polo Shirts",
"V-Neck Tshirt",
"Hoodies & Jacket"
]
},
{
title:"PERSONALIZED",
items:[
"T-shirts",
"Hoodies",
"Sweatshirts",
"Jersey",
"Cap",
"Apron"
]
}
],

services:[
{
title:"SAME DAY DELIVERY",
items:[
"Standard Business Card",
"Letterhead",
"ID Card",
"Business Invitation Card",
"Birthday Invitation",
"Thank You Card",
"Flyer & Leaflet",
"Bookmark"
]
},
{
title:"SAME DAY DELIVERY",
items:[
"Cap",
"T-shirt",
"Sheet Sticker",
"Banner",
"Fabric Banner",
"Sunboard",
"Menu",
"Poster"
]
},
{
title:"LATE-NIGHT SERVICES",
items:[
"Document",
"Paper ID Card",
"Lamination",
"Mug",
"School/College Project",
"Spiral Binding",
"Self Ink Stamp"
]
}
]

};

const menu = menus[type] || [];

return (

<div style={{
position:"absolute",
top:"70px",
left:"0",
width:"100%",
background:"#fff",
padding:"40px",
display:"grid",
gridTemplateColumns:"repeat(4,1fr) 320px",
gap:"40px",
boxShadow:"0 5px 15px rgba(0,0,0,0.2)",
zIndex:"1000"
}}>

{menu.map((section,index)=>(
<div key={index}>

<h4 style={{
borderLeft:"4px solid #ff2b2b",
paddingLeft:"10px",
marginBottom:"10px"
}}>
{section.title}
</h4>

{section.items.map((item,i)=>(
<p key={i} style={{color:"#666",margin:"6px 0"}}>
› {item}
</p>
))}

</div>
))}

<div>

<img
src="https://picsum.photos/300/200" alt=""
style={{width:"100%",marginBottom:"20px"}}
/>

<img
src="https://picsum.photos/300/201" alt=""
style={{width:"100%"}}
/>

</div>

</div>

);
}

export default MegaMenu;