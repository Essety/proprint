// import React from "react";
// import StationeryCard from "./StationeryCard";
// import {stationery} from "../data/stationery";

// function StationeryGrid(){

// return(

// <div style={{padding:"60px 80px"}}>

// <h2
// style={{
// fontSize:"36px",
// fontWeight:"700",
// marginBottom:"40px"
// }}
// >
// Stationery for your brand
// </h2>

// <div
// style={{
// display:"grid",
// gridTemplateColumns:"repeat(4,1fr)",
// gap:"30px"
// }}
// >

// {stationery.map((item)=>(
// <StationeryCard key={item.id} item={item}/>
// ))}

// </div>

// </div>

// )

// }

// export default StationeryGrid;

import React from "react";
import StationeryCard from "./StationeryCard";
import { stationery } from "../data/stationery";
import "./StationeryGrid.css";

function StationeryGrid(){

  return(

    <section className="stationery-section">

      <h2 className="stationery-title">
        Stationery for your brand
      </h2>

      <div className="stationery-grid">

        {stationery.map((item)=>(
          <StationeryCard key={item.id} item={item}/>
        ))}

      </div>

    </section>

  )

}

export default StationeryGrid;