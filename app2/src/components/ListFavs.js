import React, { useState } from "react";
import Trash from "../icons/Trash";
import Circle from "./Circle";

export default function ListFavs({ saved = [], setSaved, handlePickSaved }) {
  const handleDelete = (order) => {
    const newSaved = saved.filter((palette, index) => index != order);
    setSaved(newSaved);
  };

  return (
    <div name="favs" className="listFavs">
      {saved.map((item, index) => {
        return (
          <div className="cardSaved">
            <div className="header-Palettesaved">
              <div id="namePalette">{item.name}</div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(index)}>
                <Trash />
              </div>
            </div>
            <div
              name="listaColores"
              className="PaletaSaved"
              onClick={() => handlePickSaved(item)}>
              {item.palette.map((color) => {
                return <Circle circle={color} className={"circuloSaved"} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
