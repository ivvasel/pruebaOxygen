import React, { useState } from "react";
import { CompactPicker } from "react-color";
import "../App.css";

export default function ListPalette() {
  const [palette, setPalette] = useState([
    { color: "#666666", order: 1 },
    { color: "#666666", order: 2 },
    { color: "#666666", order: 3 },
    { color: "#666666", order: 4 },
    { color: "#666666", order: 5 },
  ]);
  const [selected, setSelected] = useState(palette[0]);

  const handlePick = (circle) => {
    setSelected(circle);
  };

  const handleChangeComplete = (newColor) => {
    const newPalette = palette.map((circle) => {
      if (circle.order === selected.order) {
        return { ...circle, color: newColor.hex };
      }
      return { ...circle };
    });
    console.log(newPalette)
    setPalette(newPalette);
  };

  return (
    <div>
      <div name="listColors" className="paleta">
        {palette.map((circle) => {
          return (
            <div
              onClick={() => handlePick(circle)}
              style={{ "background-color": circle.color }}
              className="circulo"></div>
          );
        })}
      </div>
      <div>
        <CompactPicker
          color={"#4D7D4D"}
          onChangeComplete={handleChangeComplete}
        />
      </div>
    </div>
  );
}
