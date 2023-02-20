import React, { useState } from "react";
import Circle from "./Circle";

export default function ListFavs({ saved = [], setSaved, handlePickSaved }) {
  const handleDelete = (order) => {
    const newSaved = saved.filter((palette, index) => index != order);
    setSaved(newSaved);
  };

  return (
    <div>
      {saved.map((item, index) => {
        return (
          <div>
            <div>{item.name}</div>
            <button onClick={() => handleDelete(index)}>BORRAR</button>
            <div
              name="listaColores"
              className="listPaletaSaved"
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
