import React from "react";

function FeatureSection({ features }) {

return (

<div
style={{
display: "flex",
justifyContent: "space-between",
padding: "60px 80px",
background: "#fff"
}}
>

{features.map((feature, index) => (

<div
key={index}
style={{
display: "flex",
alignItems: "center",
gap: "20px",
maxWidth: "350px"
}}
>

{/* ICON */}

<div
style={{
width: "60px",
height: "60px",
borderRadius: "50%",
border: "2px solid #e53935",
display: "flex",
alignItems: "center",
justifyContent: "center",
color: "#e53935",
fontSize: "26px"
}}
>
{feature.icon}
</div>

{/* TEXT */}

<div>

<h3
style={{
color: "#e53935",
marginBottom: "6px",
fontSize: "20px"
}}
>
{feature.title}
</h3>

<p
style={{
color: "#666",
fontSize: "14px",
lineHeight: "1.5"
}}
>
{feature.desc}
</p>

</div>

</div>

))}

</div>

);

}

export default FeatureSection;