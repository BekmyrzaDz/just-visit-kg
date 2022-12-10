import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import Logout from "../GoogleLogin/Logout";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import userIcon from "../../assets/images/UserIcon.svg";

const UserIcon = () => {
  const { profile } = useSelector((state) => state.store);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Tooltip title="Main-Logo">
        <Button
          sx={{
            background: "#fff",
            width: "63px",
            height: "63px",
            borderRadius: "50%",
          }}
          id="UserIconButton"
          aria-controls={open ? "UserIconMenu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img
            src={profile.avatar ? profile.avatar : userIcon}
            alt="User Icon"
            style={{
              width: "53px",
              height: "53px",
            }}
          />
        </Button>
      </Tooltip>
      <Menu
        id="UserIconMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "UserIconButton",
        }}
      >
        <MenuItem>
          <Logout />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserIcon;
