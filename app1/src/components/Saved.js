import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Saved() {
  const [saved, setSaved] = useLocalStorage("saved", []);
  return (
    <div>
      {saved.map((item) => (
        <div>{`${item.unit} ${item.from} → ${item.result} ${item.to}`}</div>
      ))}
    </div>
  );
}
