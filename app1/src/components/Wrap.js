import React from "react";
import Converter from "./Converter";
import Saved from "./Saved"

export default function Wrap() {
  return (
    <div>
      <Converter />
      <Saved />
    </div>
  );
}
