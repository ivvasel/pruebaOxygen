import React, { useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import ListColors from "./ListColors";
import ListFavs from "./ListFavs";

const initColor = { color: "" };
const initPalette = (length = 5) => {
  var init = new Array(length);
  for (var i = 0; i < length; i++) {
    init[i] = { ...initColor, order: i };
  }
  return init;
};

export default function Wrap() {
  const [palette, setPalette] = useState(initPalette(5));
  const textInput = useRef(null);

  const [saved, setSaved] = useLocalStorage("savedPalettes", new Array());

  const handleSave = () => {
    setSaved([...saved, { name: textInput.current.value, palette: palette }]);
    textInput.current.value = "";
    setPalette(initPalette());
  };

  const handlePickSaved = (newPalette) => {
    setPalette(newPalette.palette);
    textInput.current.value = newPalette.name;
  };
  return (
    <div className="container-wrap">
      <ListColors palette={palette} setPalette={setPalette}>
        <div name="Name">
          <div>Name</div>
          <input
            type={"text"}
            ref={textInput}
            placeholder="Website color scheme"></input>
          <button onClick={handleSave}>Añadir</button>
        </div>
      </ListColors>

      <ListFavs
        saved={saved}
        setSaved={setSaved}
        handlePickSaved={handlePickSaved}
      />
    </div>
  );
}
