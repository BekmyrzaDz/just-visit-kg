<<<<<<< HEAD
import React from "react";
// Styles
import "../../index.css";
import styles from "./Header.module.scss";
import styled from "styled-components";
// Images
import logo from "../../assets/images/logo-justvisit.svg";
import search from "../../assets/images/search.svg";
// MUI components
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Input,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
// React-router-dom components
import { Link, NavLink } from "react-router-dom";
// Components
import Select from "./Select/Select";

const ButtonCompoent = styled(NavLink)(() => ({
  fontFamily: "Oswald",
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
              <Tooltip>
                <IconButton>
                  <img src={logo} alt="" />
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
              <Typography
                sx={{
                  fontFamily: "Martel Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "32.83px",
                  borderBottom: "1px solid transparent",
                  "&:hover": {
                    borderBottom: "1px solid #D8AD83",
                    color: "#D8AD83",
                    transitionDelay: "0.2s",
                  },
                }}
              >
                Главная
              </Typography>
            </MenuItem>
            <MenuItem sx={{ marginRight: "50px" }}>
              <Typography
                sx={{
                  fontFamily: "Martel Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "32.83px",
                  borderBottom: "1px solid transparent",
                  "&:hover": {
                    borderBottom: "1px solid #D8AD83",
                    color: "#D8AD83",
                    transitionDelay: "0.2s",
                  },
                }}
              >
                Интересные места
              </Typography>
            </MenuItem>
            <MenuItem sx={{ marginRight: "50px" }}>
              <Typography
                sx={{
                  fontFamily: "Martel Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "32.83px",
                  borderBottom: "1px solid transparent",
                  "&:hover": {
                    borderBottom: "1px solid #D8AD83",
                    color: "#D8AD83",
                    transitionDelay: "0.2s",
                  },
                }}
              >
                Блоги пользователей
              </Typography>
            </MenuItem>
            <MenuItem sx={{ marginRight: "50px" }}>
              <Typography
                sx={{
                  fontFamily: "Martel Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "32.83px",
                  borderBottom: "1px solid transparent",
                  "&:hover": {
                    borderBottom: "1px solid #D8AD83",
                    color: "#D8AD83",
                    transitionDelay: "0.2s",
                  },
                }}
              >
                Личный кабинет
              </Typography>
            </MenuItem>
            <MenuItem>
              <Select />
            </MenuItem>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <ButtonCompoent variant="contained">Войти</ButtonCompoent>
            </Box>
            <Box
              sx={{
                background: "var(--light-brown)",
                display: "flex",
                alignItems: "center",
                borderRadius: "20px",
                marginLeft: "10px",
              }}
            >
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                disableUnderline={true}
                placeholder="о чем хотите узнать?"
                sx={{
                  fontFamily: "Material Sans",
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
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
=======
import React, {useState} from "react";
import logo from "../../assets/images/logo-justvisit.svg";
import {AppBar, Box, Dialog, DialogContent, IconButton, MenuItem, Tooltip, Typography,} from "@mui/material";
import {Container} from "@mui/system";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";
import Authorization from "../Authorization/Authorization";
import "./Header.css"
import {useSelector} from "react-redux";

const ButtonComponent = styled(NavLink)(() => ({
    fontFamily: "Oswald",
    borderRadius: "20px",
    border: "1px solid #000",
    fontSize: "20px",
    padding: "8px 14px",
    lineHeight: "24px",
    color: "#000",
    background: "#D8AD83",
    textDecoration: "none",
}));


const TypographyComponent = styled(Typography)(() => ({
    "&:hover": {
        borderBottom: "1px solid #D8AD83",
    },
}));

const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none"
}

const Header = () => {
    const [open, setOpen] = useState(false);
    const {profile} = useSelector(state => state.store);
    console.log(profile);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <AppBar position="static" sx={{background: "#1E2431"}}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Link to="/">
                            <Tooltip title="logo">
                                <IconButton>
                                    <img src={logo} alt=""/>
                                    {/* <Avatar src={logo} alt="" /> */}
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
                        <MenuItem sx={{marginRight: "58px"}}>
                            <TypographyComponent
                                sx={{
                                    fontFamily: "Oswald",
                                    fontWeight: 400,
                                    fontSize: 18,
                                    lineHeight: "32.83px",
                                }}
                                textAlign="center"
                            >
                                Главная
                            </TypographyComponent>
                        </MenuItem>
                        <MenuItem sx={{marginRight: "58px"}}>
                            <TypographyComponent
                                sx={{
                                    fontFamily: "Oswald",
                                    fontWeight: 400,
                                    fontSize: 18,
                                    lineHeight: "32.83px",
                                }}
                                textAlign="center"
                            >
                                Интересные места
                            </TypographyComponent>
                        </MenuItem>
                        <MenuItem sx={{marginRight: "58px"}}>
                            <TypographyComponent
                                sx={{
                                    fontFamily: "Oswald",
                                    fontWeight: 400,
                                    fontSize: 18,
                                    lineHeight: "32.83px",
                                }}
                                textAlign="center"
                            >
                                Блоги пользователей
                            </TypographyComponent>
                        </MenuItem>
                        <MenuItem>
                            <TypographyComponent
                                sx={{
                                    fontFamily: "Oswald",
                                    fontWeight: 400,
                                    fontSize: 18,
                                    lineHeight: "32.83px",
                                }}
                                textAlign="center"
                            >
                                <Link
                                    to="/registration"
                                    style={linkStyle}
                                >
                                    Зарегистрироваться
                                </Link>
                            </TypographyComponent>
                        </MenuItem>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                    >
                        <ButtonComponent variant="contained" onClick={handleClickOpen}>
                            Войти
                        </ButtonComponent>
                    </Box>
                </Box>
            </Container>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        background: "transparent",
                        boxShadow: "none",
                        width: "41,6vw",
                        padding: "0"
                    }
                }}
            >
                <DialogContent sx={{
                    width: "41,6vw",
                    padding: "0"
                }}
                >
                    <Authorization/>
                </DialogContent>
            </Dialog>
        </AppBar>
    );
>>>>>>> c29bf8c2782456994562bcf5846a21146012864c
};

export default Header;
