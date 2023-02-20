import React, { useState } from "react";
import { CompactPicker } from "react-color";
import Circle from "./Circle";
import "../App.css";

export default function ListColors({ palette = [], setPalette }) {
  const [selected, setSelected] = useState(0);

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
    setPalette(newPalette);
    setSelected({ ...selected, color: newColor.hex });
  };

  return (
    <div>
      <div name="listColors" className="paleta">
        {palette.map((circle) => {
          return <Circle circle={circle} onClick={() => handlePick(circle)} />;
        })}
      </div>
      <div>
        <CompactPicker
          color={selected.color}
          onChangeComplete={handleChangeComplete}
        />
      </div>
    </div>
  );
}
