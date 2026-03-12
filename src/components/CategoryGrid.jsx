import React from "react";
import CategoryCard from "./CategoryCard";

function CategoryGrid({categories}) {

  return (
    <div style={{padding:"40px"}}>

      <h2>Stationery for your brand</h2>

      <div style={{
        display:"flex",
        flexWrap:"wrap",
        gap:"20px",
        marginTop:"20px"
      }}>

        {categories.map((cat,index)=>(
          <CategoryCard key={index} category={cat}/>
        ))}

      </div>

    </div>
  );
}

export default CategoryGrid;