import React from "react";
import { MenuItem } from "@mui/material";
import rusFlag from "../assets/images/russian-flag.svg";

const DefaultSelectItem = () => {
  return (
    <MenuItem value={10}>
      <div
        style={{
          display: "flex",
        }}
      >
        <span style={{ paddingRight: "5px" }}>RUS </span>
        <img src={rusFlag} alt="" />
      </div>
    </MenuItem>
  );
};

export default DefaultSelectItem;
