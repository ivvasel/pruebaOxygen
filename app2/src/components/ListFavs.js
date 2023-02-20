import React, { useState } from "react";
import Circle from "./Circle";

export default function ListFavs({ saved = [], setSaved, handlePickSaved }) {
  return (
    <div>
      {saved.map((item) => {
        return (
          <div>
            <div>{item.name}</div>
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
