import React, { useState } from "react";
import CustomSelectBox from "../../UI/CustomSelectBox";

export default function Sort({ value, valueChanged }) {
  const [sortItems] = useState([
    { value: "title", name: "Наимнование" },
    { value: "description", name: "Описание" },
  ]);
  return (
    <div>
      <CustomSelectBox
        options={{ value, valueChanged }}
        items={sortItems}
      ></CustomSelectBox>
    </div>
  );
}
