import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Cross from "./icons/Cross";

export default function Saved() {
  const [saved, setSaved] = useLocalStorage("saved", []);

  const handleDelete = (order) => {
    const newSaved = saved.filter((item, index) => {
      console.log(order, index);
      if (order !== index) {
        return item;
      }
    });
    setSaved(newSaved);
    console.log(newSaved);
  };

  return (
    <div>
      {saved.map((item, index) => (
        <div>
          <div>{`${item.unit} ${item.from} → ${item.result} ${item.to}`}</div>
          <button onClick={() => handleDelete(index)}>
            <Cross />
          </button>
        </div>
      ))}
    </div>
  );
}
