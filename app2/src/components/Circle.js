import React from "react";
import Cruz from "../icons/Cruz";

export default function Circle({
  circle = {},
  onClick,
  className = "circulo",
}) {
  if (circle.color === "") {
    return (
      <button
        name="circulo"
        onClick={onClick}
        style={{
          background:
            "linear-gradient(130.53deg, #404040 17.47%, #404040 27.71%, #B0B0B0 27.72%, #B0B0B0 36.75%, #404040 36.76%, #404040 45.49%, #B0B0B0 45.5%, #B0B0B0 54.23%, #404040 54.24%, #404040 63.27%, #B0B0B0 63.27%, #B0B0B0 71.71%, #404040 71.71%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
        }}
        className={className}>
        <Cruz />
      </button>
    );
  }
  return (
    <button
      name="circulo"
      onClick={onClick}
      style={{ background: circle.color }}
      className={className}></button>
  );
}
