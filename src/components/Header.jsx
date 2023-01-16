import React from "react";

export default function Header(prpos) {
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.4)", color: "#ff6a95" }}>
      <h2 style={{ textDecoration: "none", color: "#ff6a95", textAlign:"center" }}>{prpos.text}</h2>
    </div>
  );
}
