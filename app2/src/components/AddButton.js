import React from "react";

export default function AddButton({onClick}) {
  return (
    <div className="buttonAdd" onClick={onClick}>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <line
          x1="10.6"
          y1="6.55671e-08"
          x2="10.6"
          y2="21"
          stroke="#2C2C2C"
          stroke-width="3"
        />
        <line x1="21" y1="10.6" y2="10.6" stroke="#2C2C2C" stroke-width="3" />
      </svg>
    </div>
  );
}
