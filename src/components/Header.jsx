import "./Header.css";
import logo from "../assets/images/logo-justvisit.svg";
import search from "../assets/images/search.svg";
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
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Select from "./Select";

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
  // "&:hover": {
  //   background: "#D8AD83",
  //   color: "#000",
  //   border: "1px solid #000",
  // },
}));

const TypographyComponent = styled(Typography)(() => ({
  "&:hover": {
    borderBottom: "1px solid #D8AD83",
  },
}));

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "#1E2431" }}>
      <Container maxWidth="1336px">
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
            <MenuItem>
              <TypographyComponent
                sx={{
                  fonntFamily: "Oswald",
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "32.83px",
                }}
                textAlign="center"
              >
                Главная
              </TypographyComponent>
            </MenuItem>
            <MenuItem>
              <TypographyComponent
                sx={{
                  fonntFamily: "Oswald",
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "32.83px",
                }}
                textAlign="center"
              >
                Интересные места
              </TypographyComponent>
            </MenuItem>
            <MenuItem>
              <TypographyComponent
                sx={{
                  fonntFamily: "Oswald",
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
                  fonntFamily: "Oswald",
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "32.83px",
                }}
                textAlign="center"
              >
                Личный кабинет
              </TypographyComponent>
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
              {/* <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Search"
              sx={{
                width: "198px",
                background: "var(--white)",
                ".MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            /> */}
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
};

export default Header;
