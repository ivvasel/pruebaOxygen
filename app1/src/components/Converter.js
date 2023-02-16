import React, { useState, useEffect } from "react";
import Save from "./icons/Save";
import Logo from "./icons/Logo";
import { conversiones } from "../utils/conversiones";
import useLocalStorage from "../hooks/useLocalStorage";
import ListFavs from "./ListFavs";
import "../App.css";

export default function Converter() {
  const [conversion, setConversion] = useState(conversiones[0]);
  const [inputUnit, setInputUnit] = useState(0);
  const [result, setResult] = useState("");
  const [saved, setSaved] = useLocalStorage("saved", []);

  useEffect(() => {
    selectFormula(conversion);
  }, [conversion, inputUnit]);

  const handleChangeSelect = (value) => {
    const selected = conversiones.find((item) => item.value === value);
    setConversion(selected);
  };

  const selectFormula = (item = {}) => {
    switch (item.value) {
      case "kmTomiles":
        setResult(kmTomiles(inputUnit));
        break;
      case "milesTokm":
        setResult(milesTokm(inputUnit));
        break;
      case "feetTometres":
        setResult(feetTometres(inputUnit));
        break;
      case "metresTofeet":
        setResult(metresTofeet(inputUnit));
        break;
      case "cmToinches":
        setResult(cmToinches(inputUnit));
        break;
      case "inchesTocm":
        setResult(inchesTocm(inputUnit));
        break;
      default:
        setResult(0);
    }
  };

  const handleReverse = () => {
    const inverted = `${conversion.to}To${conversion.from}`;
    const reverse = conversiones.find((item) => item.value === inverted);
    setConversion(reverse);
    setInputUnit(result);
  };

  const hanldeSave = () => {
    const newRegister = {
      from: conversion.from,
      to: conversion.to,
      unit: inputUnit,
      result: result,
    };
    setSaved([...saved, newRegister]);
  };

  const kmTomiles = (km) => (km / 1.609).toFixed(2);
  const milesTokm = (miles) => (miles * 1.609).toFixed(2);
  const feetTometres = (feet) => (feet / 3.281).toFixed(2);
  const metresTofeet = (m) => (m * 3.281).toFixed(2);
  const cmToinches = (cm) => (cm / 2.54).toFixed(2);
  const inchesTocm = (inches) => (inches * 2.54).toFixed(2);

  return (
    <div name="converter">
      <div name="card" className="card">
        <div name="body-card" className="grid-container">
          <div name="header-card" className="grid-header">
            convert
          </div>
          <div className="grid-item">
            <select
              className="cardText"
              onChange={(e) => handleChangeSelect(e.target.value)}>
              {conversiones.map((item) => (
                <option value={item.value}>{item.name}</option>
              ))}
            </select>
          </div>
          <div>
            <div onClick={handleReverse}>
              <Logo />
            </div>
          </div>
          <div className="grid-item">
            <input
              name="toConvert"
              className="cardText"
              value={inputUnit}
              onChange={(e) => setInputUnit(e.target.value)}></input>
          </div>
          <div>{conversion.from}</div>

          <div onClick={() => hanldeSave()}>
            <Save />
          </div>
          <div style={{ "text-align": "right","font-weight": "bold","font-size":"24px" }}>{`${result}`}</div>

          <div style={{"font-weight": "bold","font-size":"16px"}}>{`${conversion.to}`}</div>
        </div>
      </div>
      <ListFavs saved={saved} setSaved={setSaved} />
    </div>
  );
}
