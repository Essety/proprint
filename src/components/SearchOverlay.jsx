import React from "react";

function SearchOverlay({ closeSearch }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backdropFilter: "blur(4px)",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000
      }}
    >

      {/* CLOSE BUTTON */}
      <div
        onClick={closeSearch}
        style={{
          position: "absolute",
          top: "30px",
          right: "40px",
          fontSize: "30px",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        ✕
      </div>

      {/* SEARCH BOX */}
      <div
        style={{
          width: "60%",
          border: "2px solid #fff",
          borderRadius: "40px",
          padding: "15px 25px",
          display: "flex",
          alignItems: "center",
          background: "transparent"
        }}
      >

        <input
          type="text"
          placeholder="Search..."
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            color: "#fff",
            fontSize: "18px"
          }}
        />

        <span style={{ color: "#fff", fontSize: "20px" }}>
          🔍
        </span>

      </div>

    </div>
  );
}

export default SearchOverlay;