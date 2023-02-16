import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Cross from "./icons/Cross";
import "../App.css"

export default function ListFavs({ saved, setSaved }) {
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
    <div name="saved">
      <div className="title-saved">saved</div>
      <div className="list-saved">
        {saved.map((item, index) => (
          <div name="item-saved" className="list-item-saved">
            <div>{`${item.unit} ${item.from} → ${item.result} ${item.to}`}</div>
            <div onClick={() => handleDelete(index)}>
              <Cross />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
