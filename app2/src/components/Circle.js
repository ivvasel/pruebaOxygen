import React from "react";

export default function Circle({
  circle = {},
  onClick,
  className = "circulo",
}) {
  return (
    <button
      name="circulo"
      onClick={onClick}
      style={{ backgroundColor: circle.color }}
      className={className}></button>
  );
}
