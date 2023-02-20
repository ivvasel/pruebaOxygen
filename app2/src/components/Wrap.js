import React, { useRef, useState } from "react";
import ListColors from "./ListColors";
import ListFavs from "./ListFavs";

const initColor = { color: "#4D7D4D" };

export default function Wrap() {
  const [palette, setPalette] = useState(() => {
    const lengthPalette = 5;
    var initPalette = new Array(lengthPalette);
    for (var i = 0; i < lengthPalette; i++) {
      initPalette[i] = { ...initColor, order: i };
    }
    return initPalette;
  });
  const textInput = useRef(null);

  const [saved, setSaved] = useState(new Array());

  const handleSave = () => {
    setSaved([...saved, { name: textInput.current.value, palette: palette }]);
  };
  return (
    <div>
      <ListColors palette={palette} setPalette={setPalette} />

      <div name="Name">
        <div>Name</div>
        <input
          type={"text"}
          ref={textInput}
          placeholder="Website color scheme"></input>
        <button onClick={handleSave}>Añadir</button>
      </div>

      <ListFavs saved={saved} />
    </div>
  );
}
