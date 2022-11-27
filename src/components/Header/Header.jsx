import React, { useState } from "react";
// Styles
import "../../index.css";
import styles from "./Header.module.css";
import styled from "styled-components";
// Images
import logo from "../../assets/images/logo-justvisit.svg";
import search from "../../assets/images/search.svg";
// MUI components
import {
  AppBar,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Input,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Container } from "@mui/system";
// React-router-dom components
import { Link, NavLink } from "react-router-dom";
// Components
import Select from "./Select/Select";
import Authorization from "../Authorization/Authorization";
import { useSelector } from "react-redux";
import Logout from "../GoogleLogin/Logout";
import UserIcon from "../UserIcon/UserIcon";

const ButtonCompoent = styled(NavLink)(() => ({
  fontFamily: "Martel Sans",
  borderRadius: "20px",
  border: "1px solid #000",
  fontSize: "20px",
  padding: "8px 14px",
  lineHeight: "24px",
  color: "#000",
  background: "#D8AD83",
  textDecoration: "none",
}));

const Header = () => {
  const [open, setOpen] = useState(false);
  const { profile } = useSelector((state) => state.store);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const setActive = ({ isActive }) => (isActive ? styles.active : styles.item);

  return (
    <AppBar position="static" sx={{ background: "#1E2431" }}>
      <Container maxWidth="1240px">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Link to="/">
              <Tooltip title="Main-Logo">
                <IconButton>
                  <img src={logo} alt="logo" />
                </IconButton>
              </Tooltip>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <MenuItem sx={{ marginRight: "50px" }}>
              <NavLink to="/" className={setActive}>
                Главная
              </NavLink>
            </MenuItem>
            <MenuItem sx={{ marginRight: "50px" }}>
              <NavLink to="/map" className={setActive}>
                Карта
              </NavLink>
            </MenuItem>
            <MenuItem sx={{ marginRight: "50px" }}>
              {profile ? (
                <NavLink to="/registration" className={setActive}>
                  Личный кабинет
                </NavLink>
              ) : (
                <NavLink to="/registration" className={setActive}>
                  Зарегистрироваться
                </NavLink>
              )}
            </MenuItem>
            <MenuItem>
              <Select />
            </MenuItem>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                background: "var(--light-brown)",
                display: "flex",
                alignItems: "center",
                borderRadius: "20px",
                margin: "0 30px 0 10px",
              }}
            >
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                disableUnderline={true}
                placeholder="о чем хотите узнать?"
                sx={{
                  fontFamily: "Martel Sans",
                  fontSize: "18px",
                  fontWeight: "400px",
                  lineHeight: "32.83px",
                  width: "198px",
                  background: "var(--white)",
                  padding: "3px 10px",
                  borderRadius: "20px",
                  color: "var(--gray)",
                }}
              />
              <img
                src={search}
                alt=""
                style={{
                  width: "20px",
                  height: "20px",
                  margin: "7px",
                  cursor: "pointer",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {profile ? (
                <UserIcon />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <ButtonCompoent variant="contained" onClick={handleClickOpen}>
                    Войти
                  </ButtonCompoent>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
      {profile ? (
        ""
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            sx: {
              background: "transparent",
              boxShadow: "none",
              width: "41,6vw",
              padding: "0",
            },
          }}
        >
          <DialogContent
            sx={{
              width: "41,6vw",
              padding: "0",
            }}
          >
            <Authorization />
          </DialogContent>
        </Dialog>
      )}
    </AppBar>
  );
};

export default Header;
