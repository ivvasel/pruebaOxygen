import React from "react";
import Logo from "./icons/Logo";
import "../App.css";

export default function header() {
  return (
    <header>
      <div>
        <Logo color={"#2E0039"} />
      </div>
      <div style={{ color: "#2E0039" }}>unit converter</div>
    </header>
  );
}
