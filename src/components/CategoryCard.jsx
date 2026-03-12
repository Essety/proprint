import React from "react";

function CategoryCard({category}) {

  return (
    <div style={{
      width:"250px",
      border:"1px solid #ddd",
      padding:"10px",
      textAlign:"center"
    }}>

      <img src={category.image} width="100%" alt="" />

      <h3>{category.title}</h3>

    </div>
  );
}

export default CategoryCard;