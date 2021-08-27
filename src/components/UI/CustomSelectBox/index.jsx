import React, { useState } from "react";
import classModule from "./index.module.css";
export default function SelectBox({ options, items }) {
  return (
    <select
      className={classModule["custom-selectBox"]}
      value={options.value}
      onChange={(e) => options.valueChanged(e.target.value)}
    >
      <option disabled>Выбрать </option>

      {items.map((item) => {
        return (
          <option
            className={classModule["custom-selectBox__item"]}
            key={item.value}
            value={item.value}
          >
            {item.name}
          </option>
        );
      })}
    </select>
  );
}
