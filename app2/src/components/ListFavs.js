import React, { useState } from "react";
import Circle from "./Circle";

export default function ListFavs({ saved = [], setSaved }) {
  return (
    <div>
      {saved?.map((item) => {
        return (
          <div>
            <div>{item.name}</div>
            <div name="listaColores" className="listPaletaSaved">
              {item.palette.map((color) => {
                console.log(color)
                return <Circle circle={color} className={"circuloSaved"}/>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
