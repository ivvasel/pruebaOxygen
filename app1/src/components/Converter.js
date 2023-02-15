import React, { useState } from "react";
import Save from "./icons/Save";

export default function Converter() {
  const conversiones = [
    {
      value: "kmTomillas",
      name: "kilómetros a millas",
      from: "km",
      to: "miles",
    },
    {
      value: "millasTokm",
      name: "millas a kilómetros",
      from: "miles",
      to: "km",
    },
    {
      value: "piesTometros",
      name: "pies a metros",
      from: "feet",
      to: "metres",
    },
    {
      value: "metrosTopies",
      name: "metros a pies",
      from: "metres",
      to: "feet",
    },
    {
      value: "cmTopulgadas",
      name: "centímetros a pulgadas",
      from: "cm",
      to: "inches",
    },
    {
      value: "pulgadasTocm",
      name: "pulgadas a centímetros",
      from: "inches",
      to: "cm",
    },
  ];
  const [conversion, setConversion] = useState(conversiones[0]);

  const handleChange = (value) => {
    const selected = conversiones.find((item) => item.value === value);
    setConversion(selected);
  };

  return (
    <div name="converter">
      <div name="header-converter">convert</div>
      <div name="body-converter">
        <div>
          <select onChange={(e) => handleChange(e.target.value)}>
            {conversiones.map((item) => (
              <option value={item.value}>{item.name}</option>
            ))}
          </select>
          <input name="toConvert"></input>
          {conversion.from}
        </div>
        <div>
          <Save />
        </div>
      </div>
    </div>
  );
}
