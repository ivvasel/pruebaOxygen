import React from "react";
import Logo from "./icons/Logo";
import "../App.css"

export default function header() {
  return (
    <header className="prueba">
      <div>
        <Logo color={"currentColor"}/>
      </div>
      <div>unit converter</div>
    </header>
  );
}
