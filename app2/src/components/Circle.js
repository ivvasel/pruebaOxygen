import React from "react";

export default function Circle({
  circle = {},
  onClick,
  className = "circulo",
}) {
  return (
    <div
      name="circulo"
      onClick={onClick}
      style={{ backgroundColor: circle.color }}
      className="circulo"></div>
  );
}
