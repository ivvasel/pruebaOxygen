import React from "react";
import EmptyCircle from "../icons/EmptyCircle";

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
        style={{ background: circle.color }}
        className={className}>
        <EmptyCircle />
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
