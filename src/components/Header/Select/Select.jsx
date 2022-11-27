import * as React from "react";
import "../../../index.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import rusFlag from "../../../assets/images/russian-flag.svg";
import usaFlag from "../../../assets/images/united-states-flag-icon.svg";

export default function SelectSmall() {
  const [current, setCurrent] = React.useState(10);

  const handleChange = (event) => {
    setCurrent(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Select
        variant="outlined"
        labelId="demo-select"
        id="demo-select"
        label="Русский"
        value={current}
        onChange={handleChange}
        sx={{
          color: "var(--white)",
          ".MuiOutlinedInput-notchedOutline": { border: "none" },
          ".MuiSelect-iconOutlined": {
            color: "var(--white)",
          },
        }}
      >
        {/* <MenuItem value="">
          <em>LENG</em>
        </MenuItem> */}
        <MenuItem value={10}>
          <div
            style={{
              display: "flex",
            }}
          >
            <span
              style={{
                fontFamily: "Martel Sans",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "29px",
                paddingRight: "5px",
              }}
            >
              Русский
            </span>
            {/* <img src={rusFlag} alt="" /> */}
          </div>
        </MenuItem>
        <MenuItem value={20}>
          <div
            style={{
              display: "flex",
            }}
          >
            <span
              style={{
                fontFamily: "Martel Sans",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "29px",
                paddingRight: "5px",
              }}
            >
              Английский
            </span>
            {/* <img style={{ width: "30px" }} src={usaFlag} alt="" /> */}
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
