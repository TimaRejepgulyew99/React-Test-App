import React from "react";
import CustomInputText from "../../UI/CustomInputText";

export default function Filter({ value, valueChanged }) {
  return (
    <div>
      <CustomInputText
        value={value}
        valueChanged={valueChanged}
      ></CustomInputText>
    </div>
  );
}
