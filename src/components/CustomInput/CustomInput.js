import React from "react";
import "./CustomInput.css";

const CustomInput = ({ type, placeholder, id }) => {
  console.log("id", id);
  return (
    <div>
      <input type={type} name="" placeholder={placeholder} id={id} />
    </div>
  );
};

export default CustomInput;
